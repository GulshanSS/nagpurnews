import { Metadata, ResolvingMetadata } from "next";
import SearchFeed from "../components/Search/SearchFeed";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
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

export default function Search() {
  return <SearchFeed />;
}
