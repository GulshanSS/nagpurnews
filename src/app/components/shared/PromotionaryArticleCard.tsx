import React from "react";
import { PromotionaryArticle } from "../../../../types";
import SocialLinkForPromotionaryArticle from "./SocialLinkForPromotionaryArticle";
import { BsInstagram, BsWhatsapp, BsGlobe, BsPhone } from "react-icons/bs";

type Props = {
  promotionaryArticle: PromotionaryArticle;
};

export default function PromotionaryArticleCard({
  promotionaryArticle,
}: Props) {
  return (
    <>
      <div className="flex flex-col gap-2 p-2 shadow-md rounded-md">
        {promotionaryArticle.media.type.startsWith("image/") && (
          <img
            className="w-full rounded-md"
            alt={promotionaryArticle.title}
            src={promotionaryArticle.media.key}
          />
        )}
        {promotionaryArticle.media.type.startsWith("video/") && (
          <video
            className="w-full rounded-md"
            src={promotionaryArticle.media.key}
            controls={true}
            autoPlay={false}
          />
        )}
        <div className="px-2.5 py-1.5">
          {promotionaryArticle.title && (
            <div className="w-full text-xl text-primary-800 font-medium border-b border-primary-600">
              {promotionaryArticle.title}
            </div>
          )}
          {promotionaryArticle.content && (
            <div
              className="text-[14px] line-clamp-2 leading-6 text-justify font-thin text-primary-800 mt-2"
              dangerouslySetInnerHTML={{ __html: promotionaryArticle.content }}
            ></div>
          )}
          <div className="flex gap-2 my-2">
            <SocialLinkForPromotionaryArticle
              icon={<BsWhatsapp />}
              link="WhatsAppLink"
            />
            <SocialLinkForPromotionaryArticle
              icon={<BsInstagram />}
              link="InstagramLink"
            />
            <SocialLinkForPromotionaryArticle
              icon={<BsGlobe />}
              link="WebsiteLink"
            />
            <SocialLinkForPromotionaryArticle
              icon={<BsPhone />}
              link="Contact Number"
            />
          </div>
        </div>
      </div>
    </>
  );
}