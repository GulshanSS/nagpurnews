"use client";

import { useEffect, useState } from "react";
import { Tag } from "../../../../types";
import { getAllArticlesForTag } from "@/app/lib/tag";
import SkeletonCard from "../shared/SkeletonCard";
import Link from "next/link";
import ArticleCardForCategory from "../shared/ArticleCardForCategory";
import Pagination from "../shared/Pagination";
import ScrollButton from "../shared/ScrollButton";

type Props = {
  slug: string;
};

export default function TagFeed({ slug }: Props) {
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [tag, setTag] = useState<Tag>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getAllArticlesForTag(slug, page);
      setTag(data.tag);
      setPages(data.pages);
      setLoading(false);
    })();
  }, [page, slug]);

  if (loading) {
    return <SkeletonCard />;
  }

  const content = (
    <div className="mx-2 p-2 rounded-md mb-6">
      <div className="mb-6 font-semibold text-sm">
        <span className="text-slate-400">Showing Results for : </span>
        <span className="text-red-500 uppercase tracking-wide">{tag && tag.name}</span>
      </div>
      <div className="w-full flex flex-wrap justify-center lg:justify-start gap-4">
        {tag &&
          tag.article.map((article) => (
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
        <Pagination top={0} page={page} pages={pages} changePage={setPage} />
      </div>
      <ScrollButton />
    </div>
  );

  return content;
}
