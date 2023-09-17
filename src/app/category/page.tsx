import { Category } from "../../../types";
import CategoryDetails from "../components/shared/CategoryDetails";
import { getAllCategoriesWithMinArticles } from "../lib/category";

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