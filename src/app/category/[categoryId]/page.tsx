import CategoryFeed from "@/app/components/Category/CategoryFeed";
import ExploreCategory from "@/app/components/Category/ExploreCategory";
import {
  getAllArticlesForCategory,
  getAllCategories,
} from "@/app/lib/category";

type Params = {
  params: {
    categoryId: string;
  };
};

export default async function CategoryPage({ params: { categoryId } }: Params) {
  const categoriesData = getAllCategories();
  const categoriesWithArticleData = getAllArticlesForCategory(categoryId);

  const [{ categories: allCategories }, { category: categoryWithArticles }] =
    await Promise.all([categoriesData, categoriesWithArticleData]);

  const newCategories = [...allCategories].filter(
    (ele) => ele.id !== parseInt(categoryId)
  );
  return (
    <>
      <CategoryFeed category={categoryWithArticles} />
      <ExploreCategory categories={newCategories} />
    </>
  );
}
