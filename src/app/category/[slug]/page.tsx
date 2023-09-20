import CategoryFeed from "@/app/components/Category/CategoryFeed";
import ExploreCategory from "@/app/components/Category/ExploreCategory";
import {
  getAllArticlesForCategory,
  getAllCategories,
} from "@/app/lib/category";
import { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const { category } = await getAllArticlesForCategory(slug, 1);
  return {
    title: `${category.name} | Nagpur News`,
    alternates: {
      canonical: `https://www.nagpurnews.live/category/${slug}`,
    },
    manifest: "/images/site.webmanifest",
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/images/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/images/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/images/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/images/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  };
}

export default async function Category({ params: { slug } }: Params) {
  const categoriesData = getAllCategories();

  const { categories: allCategories } = await categoriesData;

  const newCategories = [...allCategories].filter((ele) => ele.slug !== slug);
  return (
    <>
      <CategoryFeed slug={slug} />
      <ExploreCategory categories={newCategories} />
    </>
  );
}
