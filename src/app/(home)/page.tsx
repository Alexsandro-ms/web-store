import Categories from "./component/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./component/promo-banner";

async function getProductsByCategory(categorySlug: string) {
  return await prismaClient.product.findMany({
    where: {
      ...(categorySlug === "deals"
        ? { discountPercent: { gt: 0 } }
        : { category: { slug: categorySlug } }),
    },
  });
}

export default async function Home() {
  const deals = await getProductsByCategory("deals");
  const keyboards = await getProductsByCategory("keyboards");
  const mouses = await getProductsByCategory("mouses");
  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.svg"
        alt="Até 55% de desconto esse mês"
      />
      <div className="px-5">
        <Categories />
      </div>
      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>
      <PromoBanner
        src="/banner-home-02.svg"
        alt="Até 55% de desconto em teclados"
      />
      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
      <PromoBanner
        src="/banner-home-03.svg"
        alt="Até 55% de desconto em mouses"
      />
      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
