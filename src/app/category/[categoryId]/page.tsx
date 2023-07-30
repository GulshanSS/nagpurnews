import CategoryFeed from "@/app/components/Category/CategoryFeed";
import ExploreCategory from "@/app/components/Category/ExploreCategory";
import LatestFeed from "@/app/components/Latest/LatestFeed";
import PromotionaryArticleFeed from "@/app/components/PromotionaryArticle/PromotionaryArticleFeed";
import { getLatestArticles } from "@/app/lib/article";
import {
  getAllArticlesForCategory,
  getAllCategories,
} from "@/app/lib/category";
import { getAllPromotionaryArticlesAsBanners } from "@/app/lib/promotionaryArticles";

type Params = {
  params: {
    categoryId: string;
  };
};

export default async function CategoryPage({ params: { categoryId } }: Params) {
  const { categories: allCategories } = await getAllCategories();
  const { category: categoryWithArticles } = await getAllArticlesForCategory(
    categoryId
  );
  const { articles: latestArticles } = await getLatestArticles();
  const { promotionaryArticles: promotionaryArticlesAsBanner } =
    await getAllPromotionaryArticlesAsBanners();

  const newCategories = [...allCategories].filter(
    (ele) => ele.id !== parseInt(categoryId)
  );
  return (
    <main className="max-w-screen-xl flex flex-wrap mx-auto text-3xl mt-32 font-bold">
      <div className="md:w-2/3">
        <CategoryFeed category={categoryWithArticles} />
        <ExploreCategory categories={newCategories} />
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
