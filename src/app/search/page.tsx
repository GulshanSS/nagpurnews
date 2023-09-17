"use client";
import { useEffect, useRef, useState } from "react";
import { Article } from "../../../types";
import { FiSearch } from "react-icons/fi";
import { getArticlesByKeyword } from "../lib/article";
import SkeletonCard from "../components/shared/SkeletonCard";
import { useDebounce } from "usehooks-ts";
import LatestNewsCard from "../components/Latest/LatestNewsCard";
import Pagination from "../components/shared/Pagination";

export default function Search() {
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedSearchQuery = useDebounce(keyword, 1000);

  const searchInputRef = useRef<any>(null);

  useEffect(() => {
    if (debouncedSearchQuery !== "") {
      (async () => {
        setLoading(true);
        const data = await getArticlesByKeyword(debouncedSearchQuery, page);
        setArticles(data.articles);
        setPages(data.pages);
        setLoading(false);
      })();
    } else {
      setArticles([]);
    }
  }, [debouncedSearchQuery, page]);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  if (loading) {
    return <SkeletonCard />;
  }

  return (
    <>
      <div className="mx-4">
        <div className="flex bg-primary-50 justify-center items-center rounded-full border border-primary-600">
          <input
            ref={searchInputRef}
            className="text-sm px-4 py-2.5 overflow-hidden rounded-full w-full bg-inherit placeholder:text-primary-600 placeholder:font-extrabold font-medium focus:outline-none"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter Search Keyword"
          />
          <span className="text-lg text-primary-100 bg-primary-800 rounded-full p-1.5 mr-1.5 shadow-sm">
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
        {debouncedSearchQuery !== "" && (
          <div className="mx-auto py-4">
            <Pagination
              top={0}
              page={page}
              pages={pages}
              changePage={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
}
