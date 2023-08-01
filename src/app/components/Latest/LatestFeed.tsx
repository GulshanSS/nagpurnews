import React from "react";
import { Article } from "../../../../types";
import Link from "next/link";

type Props = {
  articles: Article[];
};

function LatestFeed({ articles }: Props) {
  return (
    <>
      <div className="mx-2 p-2">
        <span className="font-semibold text-2xl text-primary-800 uppercase">
          Latest News
        </span>
        <div className="my-4 flex flex-col gap-2">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/${article.id}`}>
              <div
                key={article.id}
                className="min-w-80 flex justify-between items-center gap-2 shadow-md rounded-md p-2 cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="text-sm line-clamp-2 leading-4 font-semibold text-primary-800 border-b  border-primary-600">
                    {article.title}
                  </span>
                  <div
                    className="text-xs line-clamp-2 leading-4 font-thin text-primary-800 mt-2"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>
                {article.media[0].type.startsWith("image/") && (
                  <img
                    className="w-20 h-20 object-cover rounded-md"
                    alt={article.title}
                    src={article.media[0].key}
                  />
                )}
                {article.media[0].type.startsWith("video/") && (
                  <video
                    className="flex justify-center w-[240px] h-20 bg-black rounded-md"
                    controls={false}
                    autoPlay={false}
                    src={article.media[0].key}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestFeed;
