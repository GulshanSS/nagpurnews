import ArticleFeed from "@/app/components/Article/ArticleFeed";
import LatestFeed from "@/app/components/Latest/LatestFeed";
import PromotionaryArticleFeed from "@/app/components/PromotionaryArticle/PromotionaryArticleFeed";
import { getArticleById, getLatestArticles } from "@/app/lib/article";
import { getAllPromotionaryArticlesAsBanners } from "@/app/lib/promotionaryArticles";
import React from "react";

type Params = {
  params: {
    articleId: string;
  };
};

export default async function ArticlePage({ params: { articleId } }: Params) {
  const { article } = await getArticleById(articleId);
  const { articles: latestArticles } = await getLatestArticles();
  const { promotionaryArticles: promotionaryArticlesAsBanner } =
    await getAllPromotionaryArticlesAsBanners();
  return (
    <>
      <main className="max-w-screen-xl min-h-screen flex flex-wrap mx-auto text-3xl mt-32 font-bold">
        <div className="md:w-2/3">
          <ArticleFeed article={article} />
        </div>
        <div className="md:w-1/3">
          <LatestFeed articles={latestArticles} />
          <PromotionaryArticleFeed
            promotionaryArticles={promotionaryArticlesAsBanner}
          />
        </div>
      </main>
    </>
  );
}
