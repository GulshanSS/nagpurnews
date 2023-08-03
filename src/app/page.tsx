import BannerFeed from "./components/Banner/BannerFeed";
import {
  getAllArticlesAsBanners,
  getLatestArticles,
  getMainFeedArticles,
} from "./lib/article";
import Feed from "./components/main/Feed";
import LatestFeed from "./components/Latest/LatestFeed";
import PromotionaryArticleFeed from "./components/PromotionaryArticle/PromotionaryArticleFeed";
import { getAllPromotionaryArticlesAsBanners } from "./lib/promotionaryArticles";

export default async function Home() {
  const { articles: latestArticles } = await getLatestArticles();
  const { promotionaryArticles: promotionaryArticlesAsBanner } =
    await getAllPromotionaryArticlesAsBanners();

  const { articles: articlesAsBanners } = await getAllArticlesAsBanners();
  const { articles: mainFeedArticles } = await getMainFeedArticles();
  return (
    <>
      <main className="max-w-screen-xl min-h-screen flex flex-wrap mx-auto text-3xl mt-32 font-bold">
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
    </>
  );
}
