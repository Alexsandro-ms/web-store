import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { categoryIcon } from "@/constants/categories";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="h-full gap-8 p-5 md:flex md:flex-col">
      <Badge
        className="mb-5 w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        {categoryIcon[params.slug as keyof typeof categoryIcon]}
        {category.name}
      </Badge>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
