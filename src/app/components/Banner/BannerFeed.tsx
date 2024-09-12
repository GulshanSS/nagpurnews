"use client";

import { Article } from "../../../../types";
import AdBanner from "../Adsense/AdBanner";
import CarouselBanner from "./CarouselBanner";

type Props = {
  articles: Article[];
};

export default function BannerFeed({ articles }: Props) {
  return (
    <>
      <div className="mx-2 p-2">
        {articles && <CarouselBanner slides={articles} />}
        <AdBanner
          dataAdFormat="auto"
          dataAdSlot="7843445660"
          dataFullWidthResponsive={true}
        />
      </div>
    </>
  );
}
