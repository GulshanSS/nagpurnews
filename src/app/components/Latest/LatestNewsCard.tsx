"use client";
import React from "react";
import { CgTimelapse } from "react-icons/cg";
import { Article } from "../../../../types";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type Props = {
  article: Article;
};

export default function LatestNewsCard({ article }: Props) {
  dayjs.extend(relativeTime);
  return (
    <Link href={`/article/${article.slug}`}>
      <div className="min-w-80 flex justify-between items-center gap-2 bg-primary-900 shadow-sm rounded-md p-2 cursor-pointer">
        <div className="flex flex-col justify-between">
          <div className="text-sm leading-4 font-semibold text-primary-50 line-clamp-div latest-news-card">
            {article.title}
          </div>
          <div className="flex items-center text-gray-100 text-[12px]">
            <span className="mr-1.5">
              <CgTimelapse />
            </span>
            {dayjs(article.updatedAt).from(Date.now())}
          </div>
        </div>
        {article.media[0].type.startsWith("image/") && (
          <img
            className="text-[5px] w-20 h-20 object-cover rounded-md"
            alt={article.title}
            src={article.media[0].key}
          />
        )}
        {article.media[0].type.startsWith("video/") && (
          <video
            playsInline
            className="flex justify-center w-20 h-20 bg-black rounded-md"
            src={article.media[0].key}
            loop
            controls
            autoPlay
            muted
          />
        )}
      </div>
    </Link>
  );
}
