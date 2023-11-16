'use client'
import { Badge } from "@/components/ui/badge";
import { categoryIcon } from "@/constants/categories";
import { Category } from "@prisma/client"

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return (
        <Badge variant={"outline"} className="flex items-center justify-center gap-2 py-3">
            {categoryIcon[category.slug]}
            <span className="font-bold text-xs">{category.name}</span>
        </Badge>
     );
}
 
export default CategoryItem;