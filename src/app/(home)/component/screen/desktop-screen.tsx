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

const DesktopScreen = ({ deals, keyboards, mouses }: MobileScreenProps) => {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <PromoBanner
        srcDesktop={"/banner-home-01-desktop.svg"}
        alt="Até 55% de desconto esse mês"
        priority
      />
      <div className="flex flex-col gap-8 px-10">
        <div>
          <Categories />
        </div>
        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>
        <div className="flex w-full justify-between gap-8">
          <PromoBanner
            srcDesktop="/banner-home-02-desktop.svg"
            alt="Até 55% de desconto em mouses"
          />
         </div>
        <div className="w-full">
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>
        <div>
          <PromoBanner
            srcDesktop="/banner-home-03-desktop.svg"
            alt="Frete grátis para todo o Brasil"
          />
        </div>
        <div className="w-full">
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </div>
  );
};

export default DesktopScreen;
