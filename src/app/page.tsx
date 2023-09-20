import dynamic from "next/dynamic";
import { getAllArticlesAsBanners } from "./lib/article";
import Feed from "./components/main/Feed";
import { Metadata, ResolvingMetadata } from "next";

const BannerFeed = dynamic(() => import("./components/Banner/BannerFeed"), {
  ssr: false,
});

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
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

  const { articles: articlesAsBanners } = await articleAsBannerData;

  return (
    <>
      <BannerFeed articles={articlesAsBanners} />
      <Feed />
    </>
  );
}
