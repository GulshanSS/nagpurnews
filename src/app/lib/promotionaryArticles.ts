const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/public`;

export async function getAllPromotionaryArticlesAsBanners() {
  const res = await fetch(`${BASE_URL}/promotionary-article/banner/all`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getPromotionaryArticleBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/promotionary-article/${slug}`, {
    cache: "no-store",
  });
  return res.json();
}
