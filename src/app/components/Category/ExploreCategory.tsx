import React from "react";
import { Category } from "../../../../types";
import Link from "next/link";

type Props = {
  categories: Category[];
};

export default function ExploreCategory({ categories }: Props) {
  return (
    <div className="mx-2 p-4 flex flex-col rounded-md bg-primary-900">
      <span className="mb-6 font-semibold text-2xl text-primary-100 uppercase">
        Explore Other Categories
      </span>
      <div className="flex flex-wrap gap-2 text-primary-100">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <div
              key={category.id}
              className="uppercase text-[12px] px-2.5 hover:bg-primary-100 hover:text-primary-800 border-2 border-primary-100 rounded-md cursor-pointer"
            >
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
