import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./component/category-item";

const CatalogPage = async () => {
    const categories = await prismaClient.category.findMany({});
    return ( 
        <div className="flex flex-col gap-8 p-5">
            <Badge className="w-fit gap-1 border-primary px-3 py-[0.375rem] border-2 text-base uppercase" variant={"outline"}>
                <ShapesIcon size={16} />
                Catálogo
            </Badge>

            <div className="grid grid-cols-2 flex-wrap gap-8">
                {categories.map(categories => <CategoryItem key={categories.id} category={categories}/>)}
            </div>
        </div>
     );
}
 
export default CatalogPage;