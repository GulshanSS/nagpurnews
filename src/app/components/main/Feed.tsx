import React from "react";
import { Article } from "../../../../types";
import ArticleCard from "../shared/ArticleCard";

type Props = {
  articles: Article[];
};

export default function Feed({ articles }: Props) {
  return (
    <div className="mx-2 p-2">
      <div className="my-4 flex flex-col gap-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
