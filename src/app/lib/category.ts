const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/public/category`;

export async function getAllCategories() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function getAllArticlesForCategory(categoryId: string) {
  const res = await fetch(`${BASE_URL}/${categoryId}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
