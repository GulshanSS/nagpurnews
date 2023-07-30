import React from "react";
import { Category } from "../../../../types";
import ArticleCard from "../shared/ArticleCard";
import ArticleCardForCategory from "../shared/ArticleCardForCategory";
import Link from "next/link";

type Props = {
  category: Category;
};

export default function CategoryFeed({ category }: Props) {
  const content = (
    <div className="mx-2 p-2 rounded-md mb-6">
      <div className="mb-6 font-semibold text-2xl text-primary-800 uppercase">
        {category.name}
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-2">
        {category.article.map((article) => (
          <Link href={`/article/${article.id}`}>
            <ArticleCardForCategory key={article.id} article={article} />
          </Link>
        ))}
      </div>
    </div>
  );

  return content;
}
