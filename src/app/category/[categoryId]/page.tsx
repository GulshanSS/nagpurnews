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
  const { categories: allCategories } = await getAllCategories();
  const { category: categoryWithArticles } = await getAllArticlesForCategory(
    categoryId
  );
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
