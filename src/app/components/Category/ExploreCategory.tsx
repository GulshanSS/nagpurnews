"use client";

import React from "react";
import { Category } from "../../../../types";
import Link from "next/link";

type Props = {
  categories: Category[];
};

export default function ExploreCategory({ categories }: Props) {
  return (
    <>
      <div className="m-4 p-4 flex flex-col rounded-md bg-primary-900">
        <span className="mb-6 font-semibold text-2xl text-primary-50 uppercase">
          Explore Other Categories
        </span>
        <div className="flex flex-wrap gap-2 text-primary-50">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <div className="uppercase text-[12px] font-thin px-2.5 hover:bg-primary-50 hover:text-primary-900 border-2 border-primary-50 rounded-md cursor-pointer">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
