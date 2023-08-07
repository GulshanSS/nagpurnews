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
          <span className="text-sm leading-4 font-semibold text-primary-800">
            {article.title}
          </span>
        </div>
        {article.media[0].type.startsWith("image/") && (
          <img
            className="w-20 h-20 text-[5px] object-cover rounded-md"
            alt={article.title}
            src={article.media[0].key}
          />
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
