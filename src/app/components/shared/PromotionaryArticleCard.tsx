import React from "react";
import { PromotionaryArticle } from "../../../../types";
import SocialLinkForPromotionaryArticle from "./SocialLinkForPromotionaryArticle";
import { BsInstagram, BsWhatsapp, BsGlobe, BsPhone } from "react-icons/bs";
import Link from "next/link";

type Props = {
  promotionaryArticle: PromotionaryArticle;
};

export default function PromotionaryArticleCard({
  promotionaryArticle,
}: Props) {
  return (
    <>
      <div className="flex flex-col gap-2 p-2 border border-gray-200 shadow-sm rounded-md">
        {promotionaryArticle.media.type.startsWith("image/") && (
          <Link
            href={`/promotionary-article/${promotionaryArticle.id}/${promotionaryArticle.slug}`}
          >
            <div>
              <img
                loading="lazy"
                className="w-full rounded-md"
                alt={promotionaryArticle.title}
                src={promotionaryArticle.media.key}
              />
            </div>
          </Link>
        )}
        {promotionaryArticle.media.type.startsWith("video/") && (
          <Link
            href={`/promotionary-article/${promotionaryArticle.id}/${promotionaryArticle.slug}`}
          >
            <video
              playsInline
              className="w-full rounded-md"
              loop
              autoPlay
              muted
            >
              <source
                src={promotionaryArticle.media.key}
                type={promotionaryArticle.media.type}
              />
            </video>
          </Link>
        )}
        <div className="px-2.5 py-1.5">
          <Link
            href={`/promotionary-article/${promotionaryArticle.id}/${promotionaryArticle.slug}`}
          >
            {promotionaryArticle.title && (
              <div className="w-full text-sm text-primary-800 font-medium">
                {promotionaryArticle.title}
              </div>
            )}
          </Link>
          <div className="flex gap-2 my-2">
            {promotionaryArticle.whatsAppLink !== "" ? (
              <SocialLinkForPromotionaryArticle
                icon={<BsWhatsapp />}
                link={promotionaryArticle.whatsAppLink}
              />
            ) : null}
            {promotionaryArticle.instagramLink !== "" ? (
              <SocialLinkForPromotionaryArticle
                icon={<BsInstagram />}
                link={promotionaryArticle.instagramLink}
              />
            ) : null}
            {promotionaryArticle.websiteLink !== "" ? (
              <SocialLinkForPromotionaryArticle
                icon={<BsGlobe />}
                link="WebsiteLink"
              />
            ) : null}
            {promotionaryArticle.contact !== "" ? (
              <SocialLinkForPromotionaryArticle
                icon={<BsPhone />}
                link={`tel:+91${promotionaryArticle.contact}`}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
