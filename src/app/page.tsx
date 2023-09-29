import dynamic from "next/dynamic";
import { getAllArticlesAsBanners } from "./lib/article";
import Feed from "./components/main/Feed";
import { Metadata } from "next";
import AllTags from "./components/Tag/AllTags";
import { getAllTags } from "./lib/tag";

const BannerFeed = dynamic(() => import("./components/Banner/BannerFeed"), {
  ssr: false,
});

export function generateMetadata(): Metadata {
  return {
    title: "Home | Nagpur News",
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

  const { articles: articlesAsBanners } = await articleAsBannerData;
  const { tags } = await tagsData;

  return (
    <>
      <BannerFeed articles={articlesAsBanners} />
      <Feed />
      <div className="mx-4 mb-5 bg-primary-50 shadow-sm rounded-md px-5 pb-5">
        <AllTags headline="Explore Tags" tags={tags} />
      </div>
    </>
  );
}
