import SectionTitle from "@/components/ui/section-title";
import Categories from "../categories";
import PromoBanner from "../promo-banner";
import ProductList from "@/components/ui/product-list";
import { Product } from "@prisma/client";

interface MobileScreenProps {
  deals: Product[];
  keyboards: Product[];
  mouses: Product[];
}

const MobileScreen = ({ deals, keyboards, mouses }: MobileScreenProps) => {
  return (
    <div className="flex flex-col gap-8">
      <PromoBanner
        srcMobile={"/banner-home-01.svg"}
        alt="Até 55% de desconto esse mês"
      />
      <div className="px-5">
        <Categories />
      </div>
      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>
      <div className="px-2">
      <PromoBanner
        srcMobile="/banner-home-02.svg"
        alt="Desconto de até 35% em mouses"
      />
      </div>
      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
      <div className="px-2">
      <PromoBanner
        srcMobile="/banner-home-03.svg"
        alt="Até 55% de desconto em mouses"
        />
        </div>
      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
};

export default MobileScreen;
