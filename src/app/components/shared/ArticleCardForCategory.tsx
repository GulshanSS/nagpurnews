import React from "react";
import { Article } from "../../../../types";

type Props = {
  article: Article;
};

export default function ArticleCardForCategory({ article }: Props) {
  return (
    <div className="min-w-96 md:w-64 flex flex-col justify-center gap-2 rounded-md cursor-pointer">
      {article.media[0].type.startsWith("image/") && (
        <img
          loading="lazy"
          className="h-52 object-cover rounded-md"
          alt={article.title}
          src={article.media[0].key}
        />
      )}
      {article.media[0].type.startsWith("video/") && (
        <video
          className="flex justify-center w-full h-48 bg-black rounded-md"
          controls={true}
          autoPlay={false}
          src={article.media[0].key}
        />
      )}
      <span className="text-sm font-bold text-primary-800">
        {article.title}
      </span>
    </div>
  );
}
