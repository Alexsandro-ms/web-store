import Image from "next/image"
import Categories from "./component/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "./component/product-list"
import SectionTitle from "./component/section-title"
import PromoBanner from "./component/promo-banner"

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0
      }
    }
  })
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards"
      }
    }
  })
  return (
    <div className="">
      <PromoBanner src="/banner-home-01.svg"
        alt="Até 55% de desconto esse mês"
      />
      <div className="mt-8 px-5">
      <Categories />
      </div>
      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals}/>
      </div>
      <PromoBanner src="/banner-home-02.svg"
        alt="Até 55% de desconto em mouses"
      />
      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards}/>
      </div>
    </div>
  )
}