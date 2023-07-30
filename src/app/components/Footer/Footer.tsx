import React from "react";
import SocialLinkForPromotionaryArticle from "../shared/SocialLinkForPromotionaryArticle";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bottom-0 w-full bg-primary-900 py-2.5">
      <div className="max-w-screen-xl mx-auto flex gap-4 flex-col md:flex-row md:justify-between items-center">
        <span className="w-full flex justify-center md:justify-start text-[16px] text-primary-50 order-2 md:order-1 mx-2">
          2023 &copy; Copyright Nagpur News
        </span>
        <div className="w-full pb-3 md:pb-0 flex justify-center md:justify-end items-center gap-2 order-1 md:order-2 md:border-none border-b border-primary-50 mx-2">
          <span className="text-sm font-bold uppercase text-primary-50 hidden md:block">
            Follow us on
          </span>
          <SocialLinkForPromotionaryArticle icon={<BsWhatsapp />} link="https://wa.me/message/LWMXJ6WS46UYO1" />
          <SocialLinkForPromotionaryArticle icon={<BsFacebook />} link="https://www.facebook.com/profile.php?id=100064034115032&mibextid=LQQJ4d" />
          <SocialLinkForPromotionaryArticle icon={<BsInstagram />} link="https://instagram.com/nagpurnews?igshid=OGQ5ZDc2ODk2ZA==" />
          <SocialLinkForPromotionaryArticle icon={<BsTwitter />} link="https://twitter.com/nagpurnews3?s=11&t=8HMRzhBp7cDyqAwaBU2sRA" />
        </div>
      </div>
    </div>
  );
}
