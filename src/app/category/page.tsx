import { Metadata } from "next";
import { Category } from "../../../types";
import CategoryDetails from "../components/shared/CategoryDetails";
import { getAllCategoriesWithMinArticles } from "../lib/category";

export function generateMetadata(): Metadata {
  return {
    title: "Categories | Nagpur News",
    alternates: {
      canonical: `https://www.nagpurnews.live/category`,
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

export default async function CategoryPage() {
  const { categories } = await getAllCategoriesWithMinArticles();

  return (
    <>
      <div className="mx-4 py-2">
        <div className="flex flex-col gap-4">
          {categories &&
            categories.map((category: Category) => (
              <CategoryDetails key={category.id} category={category} />
            ))}
        </div>
      </div>
    </>
  );
}
