"use client";

import React, { useEffect, useState } from "react";
import { Category } from "../../../../types";
import ArticleCardForCategory from "../shared/ArticleCardForCategory";
import Link from "next/link";
import ScrollButton from "../shared/ScrollButton";
import { getAllArticlesForCategory } from "@/app/lib/category";
import SkeletonCard from "../shared/SkeletonCard";
import Pagination from "../shared/Pagination";

type Props = {
  slug: string;
};

export default function CategoryFeed({ slug }: Props) {
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getAllArticlesForCategory(slug, page);
      setCategory(data.category);
      setPages(data.pages);
      setLoading(false);
    })();
  }, [page, slug]);

  if (loading) {
    return <SkeletonCard />;
  }

  const content = (
    <>
      {!category ? (
        <div className="mx-4 p-2 rounded-md mb-6 flex justify-center items-center bg-black">
          <p className="p-5 text-red-500">No Posts Found</p>
        </div>
      ) : (
        <div className="mx-2 p-2 rounded-md mb-6">
          <div className="mb-6 font-semibold text-2xl text-primary-800 uppercase">
            {category && category.name}
          </div>
          <div className="w-full flex flex-wrap justify-center lg:justify-start gap-4">
            {category &&
              category.article.map((article) => (
                <Link
                  className="w-full md:w-96"
                  key={article.id}
                  href={`/article/${article.slug}`}
                >
                  <ArticleCardForCategory article={article} />
                </Link>
              ))}
          </div>
          <div className="mx-auto py-4">
            <Pagination
              top={0}
              page={page}
              pages={pages}
              changePage={setPage}
            />
          </div>
          <ScrollButton />
        </div>
      )}
    </>
  );

  return content;
}
