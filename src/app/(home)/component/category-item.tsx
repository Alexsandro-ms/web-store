"use client";
import { Badge } from "@/components/ui/badge";
import { categoryIcon } from "@/constants/categories";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant={"outline"}
        className="flex items-center justify-center gap-2 py-3 sm:h-12 sm:rounded-xl sm:px-10 text-[#ccc] border-[#ccc]"
      >
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
