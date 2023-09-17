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

export async function getArticlesByKeyword(keyword: string, page: number) {
  const res = await fetch(
    `${BASE_URL}/article/search/${keyword}?page=${page}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export async function getMainFeedArticles(page: number) {
  const res = await fetch(`${BASE_URL}/article?page=${page}`, {
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
