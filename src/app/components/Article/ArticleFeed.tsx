import React from "react";
import { Article } from "../../../../types";
import Carousel from "../shared/Carousel";

type Props = {
  article: Article;
};

export default function ArticleFeed({ article }: Props) {
  return (
    <div className="mx-2 p-2 rounded-md mb-6">
      <Carousel slides={article.media} heightVariant="large" />
      <div className="mb-6 text-justify font-semibold text-2xl text-primary-800 uppercase">
        {article.title}
      </div>
      <div className="my-6 text-primary-800 font-semibold">
        <span className="text-sm bg-widget-100 text-primary-50 px-2.5 py-1.5 rounded-md">
          {article.location}
        </span>
        <div className="text-[12px] font-thin">
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
        className="text-[16px] font-normal text-primary-800 leading-6 text-justify"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
    </div>
  );
}
