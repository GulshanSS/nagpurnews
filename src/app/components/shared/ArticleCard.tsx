"use client";
import React from "react";
import { Article } from "../../../../types";
import Link from "next/link";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className="min-w-80 flex flex-wrap md:flex-nowrap justify-between items-center gap-2 rounded-md p-2 shadow-md cursor-pointer">
      <div className="flex flex-col md:px-2.5 py-2.5 md:py-0">
        {article.category &&
          article.category.map((category) => (
            <Link
              key={category.id}
              className="mb-4"
              href={`/category/${category.id}`}
            >
              <span
                key={category.id}
                className="w-fit text-lg px-2.5 text-primary-100 bg-widget-100/80 font-semibold uppercase rounded-r-full border-l-8 border-widget-100"
              >
                {category.name}
              </span>
            </Link>
          ))}
        <Link href={`/article/${article.id}`}>
          <span className="text-lg line-clamp-2 leading-5 text-justify font-normal text-primary-800 border-b  border-primary-600">
            {article.title}
          </span>
          <div
            className="text-[14px] line-clamp-3 lg:line-clamp-4 leading-6 text-justify font-thin text-primary-800 mt-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
        </Link>
      </div>
      {article.media[0].type.startsWith("image/") && (
        <img
          className="w-full md:w-[190px] md:h-32 lg:h-48 object-cover rounded-md"
          alt={article.title}
          src={article.media[0].key}
        />
      )}
      {article.media[0].type.startsWith("video/") && (
        <video
          className="flex justify-center w-full md:h-32 lg:h-48 bg-black rounded-md"
          controls={true}
          autoPlay={false}
          src={article.media[0].key}
        />
      )}
    </div>
  );
}
