const BASE_URL = "http://localhost:5000/api/v1/public";

export async function getAllPromotionaryArticlesAsBanners() {
  const res = await fetch(`${BASE_URL}/promotionary-article/banner/all`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
