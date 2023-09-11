import BannerFeed from "./components/Banner/BannerFeed";
import { getAllArticlesAsBanners } from "./lib/article";
import Feed from "./components/main/Feed";

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
