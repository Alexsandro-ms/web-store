"use client";
import { useState } from "react";
import { ReactNode, createContext } from "react";
import { ProductWithTotalPrice } from "@/helpers/product";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  handleAddProductToCart: (product: CartProduct) => void;
  handleDecreaseProductQuantity: (productId: string) => void;
  handleIncreaseProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  handleAddProductToCart: () => {},
  handleDecreaseProductQuantity: () => {},
  handleIncreaseProductQuantity: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const handleAddProductToCart = (product: CartProduct) => {
    // Verifica se o produto já está no carrinho
    const productIsAlreadyCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    // Se o produto já estiver no carrinho
    if (productIsAlreadyCart) {
      // Atualiza a lista de produtos no estado, incrementando a quantidade do produto existente
      setProducts((prev) =>
        prev.map((cartProduct) => {
          // Verifica se o produto no carrinho é o mesmo que está sendo adicionado
          if (cartProduct.id === product.id) {
            // Retorna uma nova versão do produto no carrinho com a quantidade atualizada
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          // Se não for o produto que está sendo adicionado, retorna o produto inalterado
          return cartProduct;
        }),
      );
      return;
    }
    // Se o produto ainda não estiver no carrinho, adiciona-o à lista de produtos no estado
    setProducts((prev) => [...prev, product]);
  };

  const handleDecreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const handleIncreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      }),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        handleAddProductToCart,
        handleDecreaseProductQuantity,
        handleIncreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
