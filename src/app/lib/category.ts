const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/public/category`;

export async function getAllCategories() {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });
  return res.json();
}

export async function getAllArticlesForCategory(categoryId: string) {
  const res = await fetch(`${BASE_URL}/${categoryId}`, {
    cache: "no-store",
  });
  return res.json();
}
