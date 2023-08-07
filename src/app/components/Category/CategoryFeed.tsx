import React from "react";
import { Category } from "../../../../types";
import ArticleCardForCategory from "../shared/ArticleCardForCategory";
import Link from "next/link";

type Props = {
  category: Category;
};

export default function CategoryFeed({ category }: Props) {
  const content = (
    <div className="mx-2 p-2 rounded-md mb-6">
      <div className="mb-6 font-semibold text-2xl text-primary-800 uppercase">
        {category && category.name}
      </div>
      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
        {category &&
          category.article.map((article) => (
            <Link key={article.id} href={`/article/${article.id}`}>
              <ArticleCardForCategory article={article} />
            </Link>
          ))}
      </div>
    </div>
  );

  return content;
}
