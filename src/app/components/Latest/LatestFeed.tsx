import React from "react";
import { Article } from "../../../../types";
import LatestNewsCard from "./LatestNewsCard";
import AdBanner from "../Adsense/AdBanner";

type Props = {
  articles: Article[];
};

function LatestFeed({ articles }: Props) {
  return (
    <>
      <div className="mx-2 p-2">
        <AdBanner
          dataAdFormat="auto"
          dataAdSlot="1956694160"
          dataFullWidthResponsive={true}
        />
        <span className="font-semibold text-2xl text-primary-800 uppercase">
          Latest News
        </span>
        <div className="my-4 flex flex-col gap-2">
          {articles &&
            articles.map((article) => (
              <LatestNewsCard key={article.id} article={article} />
            ))}
        </div>
      </div>
    </>
  );
}

export default LatestFeed;
