import ArticleFeed from "@/app/components/Article/ArticleFeed";
import { getArticleBySlug } from "@/app/lib/article";
import { Metadata } from "next";
import React from "react";

const BaseUrl = process.env.NEXT_PUBLIC_CLIENT_URI as string;

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const { article } = await getArticleBySlug(slug);
  return {
    title: article.title,
    alternates: {
      canonical: `https://www.nagpurnews.live/article/${slug}`,
    },
    manifest: "/images/site.webmanifest",
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/images/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/images/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/images/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/images/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
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
