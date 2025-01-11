"use client";
import React from "react";
import { Article } from "../../../../types";
import Link from "next/link";
import Share from "./Share";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className="min-w-80 flex flex-col gap-2 rounded-md px-2.5 border border-gray-200 shadow-md cursor-pointer">
      <div className="flex items-center gap-2">
        {article.category &&
          article.category.map((category) => (
            <Link
              key={category.id}
              className=""
              href={`/category/${category.slug}`}
            >
              <span
                key={category.id}
                className="text-[14px] font-bold uppercase text-red-600"
              >
                {category.name}
              </span>
            </Link>
          ))}
      </div>
      <Link href={`/article/${article.slug}`}>
        <div className="flex gap-2 mb-2">
          <div>
            <p className="text-sm md:text-xl font-bold text-primary-800 line-clamp-div article-card">
              {article.title}
            </p>
            <div
              className="text-[14px] w-full leading-6 text-justify font-thin text-gray-500 line-clamp-div article-card"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>
          </div>
          {article.media.length > 0 &&
            article.media[0].type.startsWith("image/") && (
              <img
                loading="lazy"
                className="flex-shrink-0 w-[100px] md:w-[150px] h-24 object-contain rounded-md max-w-full"
                alt={article.title}
                src={article.media[0].key}
              />
            )}
          {article.media.length > 0 &&
            article.media[0].type.startsWith("video/") && (
              <video
                playsInline
                className="flex-shrink-0 min-w-[100px] md:min-w-[150px] h-24 bg-black rounded-md max-w-full"
                controls
                loop
                autoPlay
                muted
              >
                <source
                  src={article.media[0].key}
                  type={article.media[0].type}
                />
              </video>
            )}
        </div>
      </Link>
      <Share url={`article/${article.slug}`} title={article.title} />
    </div>
  );
}
