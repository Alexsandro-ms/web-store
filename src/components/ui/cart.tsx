"use client";

import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/provider/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

const Cart = () => {
  const { products, total, subtotal, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>
      <div className="flex h-full flex-col overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center text-xs opacity-50">
                Você ainda não adicionou itens ao seu carrinho :(
              </p>
            )}
          </div>
        </ScrollArea>
      </div>
      <div className="flex flex-col gap-3">
        <Separator />
        <div className="flex items-center justify-between text-xs opacity-75">
          <p>Subtotal</p>
          <p>R$ {subtotal.toFixed(2)}</p>
        </div>

        <Separator />
        <div className="flex items-center justify-between text-xs opacity-75">
          <p>Entrega</p>
          <p className="font-bold uppercase text-primary">Grátis</p>
        </div>

        <Separator />
        <div className="flex items-center justify-between text-xs opacity-75">
          <p>Descontos</p>
          <p>- R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />
        <div className="flex items-center justify-between text-sm font-bold">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>
        <Button className="mt-7 font-bold uppercase">Finalizar compra</Button>
      </div>
    </div>
  );
};

export default Cart;
