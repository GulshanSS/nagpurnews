import React from "react";

type Props = {
  icon: JSX.Element;
  link: string;
};

export default function SocialLinkForPromotionaryArticle({
  icon,
  link,
}: Props) {
  return (
    <a
      target="_blank"
      className="rounded-full w-10 h-10 flex justify-center items-center text-xl border border-primary-600 bg-primary-100 text-primary-900 hover:bg-primary-900 hover:text-primary-100"
      href={link}
    >
      {icon}
    </a>
  );
}
