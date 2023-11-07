'use client'
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client"
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
    const categoryIcon = {
        keyboards: <KeyboardIcon size={16} />,
        monitors: <MonitorIcon size={16} />,
        headphones: <HeadphonesIcon size={16} />,
        mousepads: <SquareIcon size={16} />,
        speakers: <SpeakerIcon size={16} />,
        mouses: <MouseIcon size={16} />
    }
    return (
        <Badge variant={"outline"} className="flex items-center justify-center gap-2 py-3">
            {categoryIcon[category.slug]}
            <span className="font-bold text-xs">{category.name}</span>
        </Badge>
     );
}
 
export default CategoryItem;