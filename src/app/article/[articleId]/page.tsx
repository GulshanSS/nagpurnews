import ArticleFeed from "@/app/components/Article/ArticleFeed";
import { getArticleById } from "@/app/lib/article";
import React from "react";

type Params = {
  params: {
    articleId: string;
  };
};

export default async function ArticlePage({ params: { articleId } }: Params) {
  const { article } = await getArticleById(articleId);

  return <ArticleFeed article={article} />;
}
