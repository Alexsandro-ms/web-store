import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { categoryIcon } from "@/constants/categories";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({params}: any) => {
    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        include: {
            products: true
        }
    })

    if(!category){
        return null
    }

    return (
        <div className="flex flex-col gap-8 p-5">
            <Badge className="w-fit gap-1 border-primary px-3 py-[0.375rem] border-2 text-base uppercase" variant={"outline"}>
                {categoryIcon[params.slug as keyof typeof categoryIcon]}
                {category.name}
            </Badge>
            <div className="grid grid-cols-2 gap-8">
                {category.products.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>)}
            </div>
        </div>
     );
}
 
export default CategoryProducts;