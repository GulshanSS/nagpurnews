import React from "react";

type Props = {
  icon: JSX.Element;
  link: string;
  socialMediaName: string;
};

export default function SocialLinkForPromotionaryArticle({
  icon,
  link,
  socialMediaName,
}: Props) {
  const colorVariant: { [key: string]: string } = {
    youtube: "text-red-600",
    whatsapp: "text-green-600",
    twitter: "text-blue-400",
    facebook: "text-blue-800",
    instagram: "text-pink-800",
  };

  return (
    <a
      target="_blank"
      className={`rounded-full w-10 h-10 flex justify-center items-center text-xl ${colorVariant[socialMediaName]} hover:bg-primary-900 hover:text-primary-50`}
      href={link}
    >
      {icon}
    </a>
  );
}
