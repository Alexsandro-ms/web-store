import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

import Link from "next/link"

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return (
        <Link href={`/product/${product.slug}`}>
        <div className="flex flex-col gap-4">
        <div className="relative bg-accent rounded-lg h-[170px] w-full flex items-center justify-center">
            <Image 
            alt={product.name}
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-auto max-w-[80%] max-h-[70%]"
            style={{
                objectFit: "contain"
            }}
            />
        {
            product.discountPercent  > 0 && (
                <Badge className="absolute left-3 top-3 px-2 py-[2px]">
                    <ArrowDownIcon size={14} /> {product.discountPercent}%
                </Badge>
            )
        }
        </div>
        <div className="">
            <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
            <div className="flex items-center gap-2">
                {product.discountPercent > 0 ? (
                    <>
                    <p className="font-semibold ">R$ {product.totalPrice.toFixed(2)}</p>
                    <p className="opacity-75 line-through text-xs overflow-hidden whitespace-nowrap text-ellipsis">R$ {Number(product.basePrice).toFixed(2)}</p>
                    </>
                )
                :
                <p className="font-semibold">R$ {Number(product.basePrice).toFixed(2)}</p>
            }
            </div>
        </div>
        </div>
        </Link>
    )
}
 
export default ProductItem;