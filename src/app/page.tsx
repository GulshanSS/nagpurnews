import BannerFeed from "./components/Banner/BannerFeed";
import { getAllArticlesAsBanners, getMainFeedArticles } from "./lib/article";
import Feed from "./components/main/Feed";

export default async function Home() {
  const { articles: articlesAsBanners } = await getAllArticlesAsBanners();
  const { articles: mainFeedArticles } = await getMainFeedArticles();

  return (
    <>
      <BannerFeed articles={articlesAsBanners} />
      <Feed articles={mainFeedArticles} />
    </>
  );
}
