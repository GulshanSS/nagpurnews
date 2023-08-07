import React from "react";
import { Article } from "../../../../types";
import Link from "next/link";

type Props = {
  article: Article;
};

export default function LatestNewsCard({ article }: Props) {
  return (
    <Link href={`/article/${article.id}`}>
      <div className="min-w-80 flex justify-between items-center gap-2 border border-gray-200 shadow-sm rounded-md p-2 cursor-pointer">
        <div className="flex flex-col">
          <span className="text-sm leading-4 font-semibold text-primary-800 line-clamp-div latest-news-card">
            {article.title}
          </span>
        </div>
        {article.media[0].type.startsWith("image/") && (
          <div className="w-20 h-20">
            <img
              className="text-[5px] w-full h-full overflow-hidden object-cover rounded-md"
              alt={article.title}
              src={article.media[0].key}
            />
          </div>
        )}
        {article.media[0].type.startsWith("video/") && (
          <video
            className="flex justify-center w-20 h-20 bg-black rounded-md"
            controls={false}
            autoPlay={false}
            src={article.media[0].key}
          />
        )}
      </div>
    </Link>
  );
}
