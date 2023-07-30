import BannerFeed from "./components/Banner/BannerFeed";
import {
  getAllArticlesAsBanners,
  getLatestArticles,
  getMainFeedArticles,
} from "./lib/article";
import LatestFeed from "./components/Latest/LatestFeed";
import Feed from "./components/main/Feed";
import PromotionaryArticleFeed from "./components/PromotionaryArticle/PromotionaryArticleFeed";
import { getAllPromotionaryArticlesAsBanners } from "./lib/promotionaryArticles";

export default async function Home() {
  const { articles: articlesAsBanners } = await getAllArticlesAsBanners();
  const { articles: latestArticles } = await getLatestArticles();
  const { articles: mainFeedArticles } = await getMainFeedArticles();
  const { promotionaryArticles: promotionaryArticlesAsBanner } =
    await getAllPromotionaryArticlesAsBanners();

  return (
    <main className="max-w-screen-xl flex flex-wrap mx-auto text-3xl mt-32 font-bold">
      <div className="md:w-2/3">
        <BannerFeed articles={articlesAsBanners} />
        <Feed articles={mainFeedArticles} />
      </div>
      <div className="md:w-1/3">
        <LatestFeed articles={latestArticles} />
        <PromotionaryArticleFeed
          promotionaryArticles={promotionaryArticlesAsBanner}
        />
      </div>
    </main>
  );
}
