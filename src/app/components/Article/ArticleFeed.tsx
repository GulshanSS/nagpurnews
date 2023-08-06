import React from "react";
import { Article } from "../../../../types";
import Carousel from "../shared/Carousel";
import Share from "../shared/Share";
import { BsShare, BsShareFill } from "react-icons/bs";

type Props = {
  article: Article;
};

export default function ArticleFeed({ article }: Props) {
  return (
    <div className="mx-2 p-2 rounded-md mb-6">
      <Carousel slides={article.media} />
      <div className="font-semibold text-justify text-xl md:text-2xl text-primary-800">
        {article.title}
      </div>
      <div className="text-gray-500 font-semibold uppercase">
        <div className="text-[12px]">
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
        className="text-[16px] font-light text-primary-800 leading-6 text-justify mb-6"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
      <div className="w-full flex justify-center md:justify-start gap-2 items-center text-center text-red-600 text-sm md:mx-2 mb-4 uppercase">
        <span>
          <BsShare />
        </span>
        Share
      </div>
      <Share url={`article/${article.id}`} title={article.title} />
    </div>
  );
}
