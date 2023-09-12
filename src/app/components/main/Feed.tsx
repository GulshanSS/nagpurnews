"use client";
import React, { useEffect, useState } from "react";
import { Article } from "../../../../types";
import ArticleCard from "../shared/ArticleCard";
import ScrollButton from "../shared/ScrollButton";
import { getMainFeedArticles } from "@/app/lib/article";
import Pagination from "../shared/Pagination";
import SkeletonCard from "../shared/SkeletonCard";

export default function Feed() {
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getMainFeedArticles(page);
      setArticles(data.articles);
      setPages(data.pages);
      setLoading(false);
    })();
  }, [page]);

  if (loading) {
    return <SkeletonCard />;
  }

  return (
    <div className="mx-2 p-2">
      <div className="my-4 flex flex-col gap-2">
        {articles &&
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
      </div>
      <div className="mx-auto py-4">
        <Pagination page={page} pages={pages} changePage={setPage} />
      </div>
      <ScrollButton />
    </div>
  );
}
