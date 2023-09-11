import ArticleFeed from "@/app/components/Article/ArticleFeed";
import { getArticleBySlug } from "@/app/lib/article";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

const BaseUrl = process.env.NEXT_PUBLIC_CLIENT_URI as string;

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params: { slug } }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { article } = await getArticleBySlug(slug);
  return {
    title: article.title,
    alternates: {
      canonical: `https://www.nagpurnews.live/article/${slug}`,
    },
    twitter: {
      title: article.title,
      images: [
        {
          url: article.media[0].key,
          alt: article.tittle,
          width: 800,
          height: 600,
          type: article.media[0].type,
        },
      ],
    },
    openGraph: {
      title: article.title,
      type: "article",
      url: `${BaseUrl}/article/${slug}`,
      images: [
        {
          url: article.media[0].key,
          alt: article.tittle,
          width: 800,
          type: article.media[0].type,
        },
      ],
      videos: [
        {
          url: article.media[0].key,
          width: 800,
          type: article.media[0].type,
        },
      ],
      siteName: "Nagpur News",
    },
  };
}

export default async function Article({ params: { slug } }: Params) {
  const { article } = await getArticleBySlug(slug);

  return (
    <>
      <ArticleFeed article={article} />
    </>
  );
}