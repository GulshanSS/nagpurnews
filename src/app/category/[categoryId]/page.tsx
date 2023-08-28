import CategoryFeed from "@/app/components/Category/CategoryFeed";
import ExploreCategory from "@/app/components/Category/ExploreCategory";
import {
  getAllArticlesForCategory,
  getAllCategories,
} from "@/app/lib/category";
import { Metadata, ResolvingMetadata } from "next";

type Params = {
  params: {
    categoryId: string;
  };
};

export async function generateMetadata(
  { params: { categoryId } }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { category } = await getAllArticlesForCategory(categoryId);
  return {
    title: category.title,
    alternates: {
      canonical: `https://www.nagpurnews.live/${category.title}`,
    },
  };
}

export default async function Category({ params: { categoryId } }: Params) {
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
