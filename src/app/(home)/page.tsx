import Image from "next/image"
import Categories from "./component/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "./component/product-list"

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0
      }
    }
  })
  return (
    <div className="">
      <Image src="/banner-home-01.svg"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto esse mês"
      />
      <div className="mt-8 px-5">
      <Categories />
      </div>
      <div className="mt-8">
        <ProductList products={deals}/>
      </div>
    </div>
  )
}