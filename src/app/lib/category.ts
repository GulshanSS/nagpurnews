const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/public/category`;

export async function getAllCategories() {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });
  return res.json();
}

export async function getAllCategoriesWithMinArticles() {
  const res = await fetch(`${BASE_URL}/all`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getAllArticlesForCategory(slug: string) {
  const res = await fetch(`${BASE_URL}/${slug}`, {
    cache: "no-store",
  });
  return res.json();
}
