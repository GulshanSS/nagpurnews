const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/public`;

export async function getAllPromotionaryArticlesAsBanners() {
  const res = await fetch(`${BASE_URL}/promotionary-article/banner/all`);
  return res.json();
}
