import React from "react";
import Script from "next/script";
import LatestFeed from "../components/Latest/LatestFeed";
import PromotionaryArticleFeed from "../components/PromotionaryArticle/PromotionaryArticleFeed";
import { getLatestArticles } from "../lib/article";
import { getAllPromotionaryArticlesAsBanners } from "../lib/promotionaryArticles";
import { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "google-adsense-account": "ca-pub-5092077595720219",
  },
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const latestArticlesData = getLatestArticles();
  const promotionaryArticlesData = getAllPromotionaryArticlesAsBanners();

  const [
    { articles: latestArticles },
    { promotionaryArticles: promotionaryArticlesAsBanner },
  ] = await Promise.all([latestArticlesData, promotionaryArticlesData]);

  return (
    <>
      <div className="w-full md:w-2/3">{children}</div>
      <div className="w-full md:w-1/3">
        {latestArticles && <LatestFeed articles={latestArticles} />}
        {promotionaryArticlesAsBanner && (
          <PromotionaryArticleFeed
            promotionaryArticles={promotionaryArticlesAsBanner}
          />
        )}
      </div>
    </>
  );
}
