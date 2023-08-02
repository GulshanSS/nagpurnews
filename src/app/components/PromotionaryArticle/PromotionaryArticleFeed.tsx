import React from "react";
import { PromotionaryArticle } from "../../../../types";
import PromotionaryArticleCard from "../shared/PromotionaryArticleCard";

type Props = {
  promotionaryArticles: PromotionaryArticle[];
};

export default function PromotionaryArticleFeed({
  promotionaryArticles,
}: Props) {
  return (
    <>
      <div className="mx-2 p-2">
        <div className="my-4 flex flex-col gap-2">
          {promotionaryArticles &&
            promotionaryArticles.map((promotionaryArticle) => (
              <PromotionaryArticleCard
                key={promotionaryArticle.id}
                promotionaryArticle={promotionaryArticle}
              />
            ))}
        </div>
      </div>
    </>
  );
}
