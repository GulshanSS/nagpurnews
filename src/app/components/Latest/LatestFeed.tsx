import React from "react";
import { Article } from "../../../../types";
import LatestNewsCard from "./LatestNewsCard";
import Link from "next/link";

type Props = {
  articles: Article[];
};

function LatestFeed({ articles }: Props) {
  return (
    <>
      <div className="mx-2 p-2">
        <span className="font-semibold text-2xl text-primary-800 uppercase">
          Latest News
        </span>
        <div className="my-4 flex flex-col gap-2">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/${article.id}`}>
              <LatestNewsCard article={article} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestFeed;
