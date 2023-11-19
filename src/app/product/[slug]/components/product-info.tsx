"use client";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/provider/cart";
import { ArrowLeft, ArrowRight, TruckIcon } from "lucide-react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddProductToCart } = useContext(CartContext);
  const handleDecreaseQuantityClick = () => {
    setQuantity((qnt) => (qnt === 1 ? qnt : qnt - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((qnt) => qnt + 1);
  };

  const handleAddProductToCartClick = () => {
    handleAddProductToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>
      <div className="flex items-center gap-1">
        <h1 className="gap-2 text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercent > 0 && (
          <DiscountBadge>{product.discountPercent}</DiscountBadge>
        )}
      </div>
      {product.discountPercent > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          onClick={() => handleDecreaseQuantityClick()}
          size={"icon"}
          variant={"outline"}
        >
          <ArrowLeft size={14} />
        </Button>
        {quantity}
        <Button
          onClick={() => handleIncreaseQuantityClick()}
          size={"icon"}
          variant={"outline"}
        >
          <ArrowRight size={16} />
        </Button>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>
      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddProductToCartClick}
      >
        Adicionar ao carrinho
      </Button>
      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via{" "}
              <span className="font-bold">
                <span className="uppercase">Web</span>Packet
              </span>
            </p>
            <p className="text-xs text-[#8162ff]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
