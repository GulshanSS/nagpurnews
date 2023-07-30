const BASE_URL = "http://localhost:5000/api/v1/public";

export async function getAllArticlesAsBanners() {
  const res = await fetch(`${BASE_URL}/article/banner/all`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getLatestArticles() {
  const res = await fetch(`${BASE_URL}/article/latest/today`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getMainFeedArticles() {
  const res = await fetch(`${BASE_URL}/article`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getArticleById(articleId: string) {
  const res = await fetch(`${BASE_URL}/article/${articleId}`);
  return res.json();
}
