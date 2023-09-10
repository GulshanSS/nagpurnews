import CategoryFeed from "@/app/components/Category/CategoryFeed";
import ExploreCategory from "@/app/components/Category/ExploreCategory";
import {
  getAllArticlesForCategory,
  getAllCategories,
} from "@/app/lib/category";
import { Metadata, ResolvingMetadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params: { slug } }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { category } = await getAllArticlesForCategory(slug);
  return {
    title: category.title,
    alternates: {
      canonical: `https://www.nagpurnews.live/category/${slug}`,
    },
  };
}

export default async function Category({ params: { slug } }: Params) {
  const categoriesData = getAllCategories();
  const categoriesWithArticleData = getAllArticlesForCategory(slug);

  const [{ categories: allCategories }, { category: categoryWithArticles }] =
    await Promise.all([categoriesData, categoriesWithArticleData]);

  const newCategories = [...allCategories].filter((ele) => ele.slug !== slug);
  return (
    <>
      <CategoryFeed category={categoryWithArticles} />
      <ExploreCategory categories={newCategories} />
    </>
  );
}
