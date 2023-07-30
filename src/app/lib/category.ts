const BASE_URL = "http://localhost:5000/api/v1/public/category";

export async function getAllCategories() {
  const res = await fetch(BASE_URL, { next: { revalidate: 60 } });
  return res.json();
}

export async function getAllArticlesForCategory(categoryId: string) {
  const res = await fetch(`${BASE_URL}/${categoryId}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
