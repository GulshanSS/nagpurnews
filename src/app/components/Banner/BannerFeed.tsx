"use client";

import { useId } from "react";
import { Article } from "../../../../types";
import CarouselBanner from "./CarouselBanner";

type Props = {
  articles: Article[];
};

export default function BannerFeed({ articles }: Props) {
  return (
    <div className="mx-2 p-2">
      <span className="font-semibold text-2xl text-primary-800 uppercase">
        Today's Special
      </span>
      <CarouselBanner slides={articles} heightVariant="large" />
    </div>
  );
}
