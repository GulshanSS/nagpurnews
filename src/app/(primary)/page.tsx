import dynamic from "next/dynamic";
import { getAllArticlesAsBanners } from "../lib/article";
import Feed from "../components/main/Feed";
import { Metadata } from "next";
import { getAllTags } from "../lib/tag";
import AllTags from "../components/Tag/AllTags";

const BannerFeed = dynamic(() => import("../components/Banner/BannerFeed"), {
  ssr: false,
});

export function generateMetadata(): Metadata {
  return {
    title: "Home | Nagpur News",
    description:
      "Stay updated with the latest news, events, and happenings in Nagpur with nagpurnews.live. Your go-to source for real-time local news, breaking stories, and in-depth analysis on what's happening around you",
    alternates: {
      canonical: `https://www.nagpurnews.live`,
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
  };
}

export default async function Home() {
  const articleAsBannerData = getAllArticlesAsBanners();
  const tagsData = getAllTags();

  const [{ articles: articlesAsBanners }, { tags }] = await Promise.all([
    articleAsBannerData,
    tagsData,
  ]);

  return (
    <>
      <BannerFeed articles={articlesAsBanners} />
      <Feed />
      {tags && (
        <div className="mx-4 mb-5">
          <AllTags headline="Explore Tags" tags={tags} />
        </div>
      )}
    </>
  );
}
