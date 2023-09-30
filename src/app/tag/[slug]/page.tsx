import TagFeed from "@/app/components/Tag/TagFeed";
import { getAllArticlesForTag } from "@/app/lib/tag";
import { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const { tag } = await getAllArticlesForTag(slug, 1);
  return {
    title: `${tag.name} | Nagpur News`,
    alternates: {
      canonical: `https://www.nagpurnews.live/category/${slug}`,
    },
    manifest: "/images/site.webmanifest",
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/images/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/images/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/images/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/images/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  };
}

export default function Tag({ params: { slug } }: Params) {
  return (
    <>
      <TagFeed slug={slug} />
    </>
  );
}
