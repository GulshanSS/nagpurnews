import React from "react";
import NavPill from "./NavPill";
import { HiHome } from "react-icons/hi";
import { Category } from "../../../../types";
import { getAllCategories } from "@/app/lib/category";

export default async function SubNav() {
  const categoriesData = getAllCategories();

  const { categories } = await categoriesData;

  return (
    <nav className="top-[70px] fixed w-full bg-primary-900 border-b border-primary-600 z-30">
      <div className="max-w-screen-xl px-3 py-2 mx-auto">
        <div className="flex items-center">
          <ul className="font-medium mt-0 mr-2 space-x-8 text-sm border-r border-primary-600">
            <NavPill href="/" label="Home" icon={<HiHome />} />
          </ul>
          <ul className="flex flex-row overflow-x-auto scrollbar-hide">
            {categories &&
              categories.map((category: Category) => (
                <NavPill
                  key={category.id}
                  href={`/category/${category.id}`}
                  label={category.name}
                />
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
