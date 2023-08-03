import BannerFeed from "./components/Banner/BannerFeed";
import {
  getAllArticlesAsBanners,
  getLatestArticles,
  getMainFeedArticles,
} from "./lib/article";
import Feed from "./components/main/Feed";

export default async function Home() {
  const articleAsBannerData = await getAllArticlesAsBanners();
  const mainFeedArticlesData = await getMainFeedArticles();

  const [{ articles: articlesAsBanners }, { articles: mainFeedArticles }] =
    await Promise.all([articleAsBannerData, mainFeedArticlesData]);
  return (
    <>
      <BannerFeed articles={articlesAsBanners} />
      <Feed articles={mainFeedArticles} />
    </>
  );
}
