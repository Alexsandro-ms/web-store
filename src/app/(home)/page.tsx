import { prismaClient } from "@/lib/prisma";
import MobileScreen from "./component/screen/mobile-screen";
import DesktopScreen from "./component/screen/desktop-screen";

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
    <div>
      <div className="hidden md:block">
        <DesktopScreen deals={deals} keyboards={keyboards} mouses={mouses} />
      </div>
      <div className="md:hidden">
        <MobileScreen deals={deals} keyboards={keyboards} mouses={mouses} />
      </div>
    </div>
  );
}
