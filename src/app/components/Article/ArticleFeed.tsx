import React from "react";
import { Article } from "../../../../types";
import Share from "../shared/Share";
import { BsShare } from "react-icons/bs";

import AllTags from "../Tag/AllTags";

import Carousel from "../shared/Carousel";

import TwitterVideoEmbeded from "../shared/TwitterVideoEmbeded";
import AdBanner from "../Adsense/AdBanner";

type Props = {
  article: Article;
};

export default function ArticleFeed({ article }: Props) {
  return (
    <div className="mx-2 p-2 rounded-md mb-6">
      <div className="font-semibold mb-2 bg-black text-white text-xl md:text-2xl">
        <div className="py-2 px-5">{article.title}</div>
        {article.media.length > 0 && <Carousel slides={article.media} />}
      </div>
      <AdBanner
        dataAdFormat="auto"
        dataAdSlot="7843445660"
        dataFullWidthResponsive={true}
      />
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
      {article.youtubeVideoUrl !== "" && (
        <iframe
          src={article.youtubeVideoUrl}
          allowFullScreen
          title="video"
          style={{
            borderRadius: "10px",
            width: "100%",
            minHeight: "400px",
            margin: "10px 0",
          }}
        />
      )}
      {article.twitterId !== "" && (
        <TwitterVideoEmbeded content={article.twitterId} />
      )}
      {article.articleSection.length > 0 &&
        article.articleSection.map((articleSection) => (
          <div key={articleSection.id}>
            {articleSection.title && (
              <div className="font-semibold text-justify tracking-wide mb-4 text-lg text-primary-800">
                {articleSection.title}
              </div>
            )}
            {articleSection.media.length > 0 && (
              <Carousel slides={articleSection.media} />
            )}
            <div
              className="text-[16px] font-light text-primary-800 leading-6 text-justify my-6 article_feed"
              dangerouslySetInnerHTML={{ __html: articleSection.content }}
            ></div>
          </div>
        ))}
      <div className="mb-5">
        {article.tag && <AllTags headline="Related Tags" tags={article.tag} />}
      </div>
      <div className="w-full flex justify-center md:justify-start gap-2 items-center text-center text-red-600 text-sm md:mx-2 mb-4 uppercase">
        <span>
          <BsShare />
        </span>
        <span className="tracking-wide">Share</span>
      </div>
      <Share url={`article/${article.slug}`} title={article.title} />
    </div>
  );
}
