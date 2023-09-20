import React from "react";
import { Article } from "../../../../types";
import Share from "../shared/Share";
import { BsShare } from "react-icons/bs";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("../shared/Carousel"), {
  ssr: false,
});

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
          }).format(new Date(article.publishedOn))}{" "}
          - {article.author}
        </div>
      </div>
      <div
        className="text-[16px] font-light text-primary-800 leading-6 text-justify mb-6 article_feed"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
      <div className="w-full flex justify-center md:justify-start gap-2 items-center text-center text-red-600 text-sm md:mx-2 mb-4 uppercase">
        <span>
          <BsShare />
        </span>
        Share
      </div>
      <Share url={`article/${article.slug}`} title={article.title} />
    </div>
  );
}
