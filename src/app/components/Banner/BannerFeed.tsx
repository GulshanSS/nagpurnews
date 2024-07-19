"use client";

import { Article } from "../../../../types";
import Ads from "../Adsense/Ads";
import CarouselBanner from "./CarouselBanner";

type Props = {
  articles: Article[];
};

export default function BannerFeed({ articles }: Props) {
  return (
    <>
      <div className="mx-2 p-2">
        {articles && <CarouselBanner slides={articles} />}
        <Ads clientId="5092077595720219" slot="3816570743" />
      </div>
    </>
  );
}
