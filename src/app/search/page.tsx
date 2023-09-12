"use client";
import { useEffect, useState } from "react";
import { Article } from "../../../types";
import { FiSearch } from "react-icons/fi";
import { getArticlesByKeyword } from "../lib/article";
import SkeletonCard from "../components/shared/SkeletonCard";
import { useDebounce } from "usehooks-ts";
import LatestNewsCard from "../components/Latest/LatestNewsCard";

export default function Search() {
  const [keyword, setKeyword] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedSearchQuery = useDebounce(keyword, 500);

  useEffect(() => {
    if (debouncedSearchQuery !== "") {
      (async () => {
        setLoading(true);
        const data = await getArticlesByKeyword(debouncedSearchQuery);
        setArticles(data.articles);
        setLoading(false);
      })();
    } else {
      setArticles([]);  
    }
  }, [debouncedSearchQuery]);

  if (loading) {
    return <SkeletonCard />;
  }

  return (
    <>
      <div className="mx-4">
        <div className="flex justify-center items-center px-3.5 py-1.5 border border-slate-600 rounded-full">
          <input
            autoFocus
            className="text-lg w-full font-medium focus:outline-none"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter search Keyword"
          />
          <span className="text-lg">
            <FiSearch />
          </span>
        </div>
        {debouncedSearchQuery !== "" && (
          <span className="text-sm text-medium">
            Search Keyword :{" "}
            <span className="text-bold text-red-500">
              {debouncedSearchQuery}
            </span>
          </span>
        )}
        <div className="flex flex-col gap-2 py-4">
          {articles &&
            articles.length > 0 &&
            articles.map((article) => (
              <LatestNewsCard key={article.id} article={article} />
            ))}
          {debouncedSearchQuery !== "" && !articles && (
            <div className="border border-red-500 rounded-md py-5 bg-red-200  text-red-500 text-sm text-center uppercase">
              No Articles Found
            </div>
          )}
        </div>
      </div>
    </>
  );
}
