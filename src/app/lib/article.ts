const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/public`;

export async function getAllArticlesAsBanners() {
  const res = await fetch(`${BASE_URL}/article/banner/all`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getLatestArticles() {
  const res = await fetch(`${BASE_URL}/article/latest/today`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getMainFeedArticles() {
  const res = await fetch(`${BASE_URL}/article`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getArticleBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/article/${slug}`, {
    cache: "no-store",
  });
  return res.json();
}
