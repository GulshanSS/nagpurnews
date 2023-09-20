import dynamic from "next/dynamic";
import { getAllArticlesAsBanners } from "./lib/article";
import Feed from "./components/main/Feed";

const BannerFeed = dynamic(() => import("./components/Banner/BannerFeed"), {
  ssr: false,
});

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
