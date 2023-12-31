import SearchFeed from "@/app/components/Search/SearchFeed";
import AllTags from "@/app/components/Tag/AllTags";
import { getAllTags } from "@/app/lib/tag";
import { Metadata } from "next";


export function generateMetadata(): Metadata {
  return {
    title: "Search | Nagpur News",
    alternates: {
      canonical: `https://www.nagpurnews.live/search`,
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

export default async function Search() {
  const { tags } = await getAllTags();

  return (
    <>
      <SearchFeed />
      {tags && (
        <div className="mx-4 mb-5">
          <AllTags headline="Tags" tags={tags} />
        </div>
      )}
    </>
  );
}
