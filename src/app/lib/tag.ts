const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/public/tag`;

export async function getAllTags() {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });
  return res.json();
}

export async function getAllArticlesForTag(slug: string, page: number) {
  const res = await fetch(`${BASE_URL}/${slug}?page=${page}`, {
    cache: "no-store",
  });
  return res.json();
}
