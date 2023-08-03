import AboutUsFeed from "../components/AboutUs/AboutUsFeed";
import LatestFeed from "../components/Latest/LatestFeed";
import PromotionaryArticleFeed from "../components/PromotionaryArticle/PromotionaryArticleFeed";
import { getLatestArticles } from "../lib/article";
import { getAllPromotionaryArticlesAsBanners } from "../lib/promotionaryArticles";

export default async function AboutUsPage() {
  const { articles: latestArticles } = await getLatestArticles();
  const { promotionaryArticles: promotionaryArticlesAsBanner } =
    await getAllPromotionaryArticlesAsBanners();

  return (
    <>
      <main className="max-w-screen-xl min-h-screen flex flex-wrap mx-auto text-3xl mt-32 font-bold">
        <div className="md:w-2/3">
          <AboutUsFeed />
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
