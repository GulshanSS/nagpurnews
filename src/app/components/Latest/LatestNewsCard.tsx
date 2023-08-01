import React from "react";
import { Article } from "../../../../types";

type Props = {
  key: number;
  article: Article;
};

export default function LatestNewsCard({ article, key }: Props) {
  return (
    <div className="min-w-80 flex justify-between items-center gap-2 shadow-md rounded-md p-2 cursor-pointer">
      <div className="flex flex-col">
        <span className="text-sm line-clamp-2 leading-4 font-semibold text-primary-800 border-b  border-primary-600">
          {article.title}
        </span>
        <div
          key={key}
          className="text-xs line-clamp-2 leading-4 font-thin text-primary-800 mt-2"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
      {article.media[0].type.startsWith("image/") && (
        <img
          className="w-20 h-20 object-cover rounded-md"
          alt={article.title}
          src={article.media[0].key}
        />
      )}
      {article.media[0].type.startsWith("video/") && (
        <video
          className="flex justify-center w-[240px] h-20 bg-black rounded-md"
          controls={false}
          autoPlay={false}
          src={article.media[0].key}
        />
      )}
    </div>
  );
}
