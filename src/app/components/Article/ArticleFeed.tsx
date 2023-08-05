import React from "react";
import { Article } from "../../../../types";
import Carousel from "../shared/Carousel";

type Props = {
  article: Article;
};

export default function ArticleFeed({ article }: Props) {
  return (
    <div className="mx-2 p-2 rounded-md mb-6">
      <Carousel slides={article.media} />
      <div className="font-semibold text-xl md:text-2xl text-primary-800">
        {article.title}
      </div>
      <div className="text-primary-800 font-semibold uppercase">
        <div className="text-[10px] font-semibold">
          {article.location},{" "}
          {new Intl.DateTimeFormat("indian", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "numeric",
          }).format(new Date(article.publishedOn))}{" "}
          - {article.author}
        </div>
      </div>
      <div
        className="text-[16px] font-light text-primary-800 leading-6 text-justify"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
    </div>
  );
}
