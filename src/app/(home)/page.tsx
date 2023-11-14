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
    <div className="flex flex-col gap-8">
      <PromoBanner src="/banner-home-01.svg"
        alt="Até 55% de desconto esse mês"
      />
      <div className="px-5">
      <Categories />
      </div>
      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals}/>
      </div>
      <PromoBanner src="/banner-home-02.svg"
        alt="Até 55% de desconto em teclados"
      />
      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards}/>
      </div>
      <div>
        <PromoBanner 
          src="/banner-home-03.svg"
          alt="Até 55% de desconto em mouses"
        />
      </div>
    </div>
  )
}