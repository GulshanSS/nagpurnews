import React from "react";
import { Article } from "../../../../types";

type Props = {
  article: Article;
};

export default function ArticleCardForCategory({ article }: Props) {
  return (
    <div className="w-80 md:w-60 lg:w-64 flex flex-col justify-center gap-2 rounded-md cursor-pointer">
      {article.media[0].type.startsWith("image/") && (
        <div className="w-full h-52">
          <img
            loading="lazy"
            className="w-full h-full overflow-hidden text-sm object-cover rounded-md"
            alt={article.title}
            src={article.media[0].key}
          />
        </div>
      )}
      {article.media[0].type.startsWith("video/") && (
        <video
          className="flex justify-center w-full h-52 bg-black rounded-md"
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
