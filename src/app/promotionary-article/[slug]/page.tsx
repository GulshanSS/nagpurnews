import Share from "@/app/components/shared/Share";
import SocialLinkForPromotionaryArticle from "@/app/components/shared/SocialLinkForPromotionaryArticle";
import { getPromotionaryArticleBySlug } from "@/app/lib/promotionaryArticles";
import { Metadata } from "next";
import {
  BsGlobe,
  BsInstagram,
  BsPhone,
  BsShare,
  BsWhatsapp,
} from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const { promotionaryArticle } = await getPromotionaryArticleBySlug(slug);
  return {
    title: promotionaryArticle.title,
    alternates: {
      canonical: `https://www.nagpurnews.live/promotionary-article/${slug}`,
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

export default async function PromotionaryArticle({
  params: { slug },
}: Params) {
  const promotionaryArticleData = getPromotionaryArticleBySlug(slug);

  const { promotionaryArticle } = await promotionaryArticleData;

  return (
    <>
      <div className="mx-2 p-2 rounded-md mb-6">
        <div className="h-60 md:h-[500px] flex justify-center rounded-md bg-black">
          {promotionaryArticle.media.type.startsWith("image/") && (
            <img
              className="object-cover rounded-md"
              alt={promotionaryArticle.title}
              src={promotionaryArticle.media.key}
            />
          )}
          {promotionaryArticle.media.type.startsWith("video/") && (
            <video playsInline controls loop autoPlay muted>
              <source
                src={promotionaryArticle.media.key}
                type={promotionaryArticle.media.type}
              />
            </video>
          )}
        </div>

        <div className="font-semibold my-4 text-xl md:text-2xl text-primary-800">
          {promotionaryArticle.title}
        </div>
        <div
          className="text-[16px] font-light text-primary-800 leading-6 text-justify"
          dangerouslySetInnerHTML={{ __html: promotionaryArticle.content }}
        ></div>
        {promotionaryArticle.address && (
          <div className="leading-tight my-4 flex items-center gap-2 text-primary-900">
            <span className="text-xl">
              <IoLocationSharp />
            </span>
            <p className="text-sm font-normal">{promotionaryArticle.address}</p>
          </div>
        )}
        <div className="flex flex-col justify-center items-start my-4">
          <span className="text-sm font-thin">Contact Details</span>
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
        <div className="w-full flex justify-center md:justify-start gap-2 items-center text-center text-red-600 text-sm md:mx-2 mb-4 uppercase">
          <span>
            <BsShare />
          </span>
          Share
        </div>
        <Share
          url={`article/${promotionaryArticle.id}/${promotionaryArticle.slug}`}
          title={promotionaryArticle.title}
        />
      </div>
    </>
  );
}
