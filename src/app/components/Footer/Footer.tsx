import React from "react";
import SocialLinkForPromotionaryArticle from "../shared/SocialLinkForPromotionaryArticle";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bottom-0 pb-16 md:pb-0 w-full bg-primary-900">
      <div className="max-w-screen-xl mx-auto flex gap-4 flex-col md:flex-row md:justify-between items-center p-4">
        <span className="w-full flex justify-center md:justify-start text-[16px] text-primary-50 order-3 md:order-1 mx-2">
          2023 &copy; Copyright Nagpur News
        </span>
        <div className="w-full text-sm flex items-center justify-center gap-4 order-3 md:order-1">
          <div className="text-primary-50 hover:cursor-pointer underline">
            <Link href={"/about-us"}>About Us</Link>
          </div>
          <div className="text-primary-50 hover:cursor-pointer underline">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </div>
          <div className="text-primary-50 hover:cursor-pointer underline">
            <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
          </div>
        </div>
        <div className="w-full md:pb-0 flex justify-center md:justify-end items-center gap-2 order-1 md:order-3 mx-2">
          <span className="text-sm font-bold uppercase text-primary-50 hidden md:block">
            Follow us on
          </span>
          <SocialLinkForPromotionaryArticle
            icon={<BsYoutube />}
            link="https://youtube.com/@nagpurnews1"
            socialMediaName="youtube"
          />
          <SocialLinkForPromotionaryArticle
            icon={<BsFacebook />}
            link="https://www.facebook.com/profile.php?id=100064034115032&mibextid=LQQJ4d"
            socialMediaName="facebook"
          />
          <SocialLinkForPromotionaryArticle
            icon={<BsInstagram />}
            link="https://instagram.com/nagpurnews?igshid=OGQ5ZDc2ODk2ZA=="
            socialMediaName="instagram"
          />
          <SocialLinkForPromotionaryArticle
            icon={<BsTwitterX />}
            link="https://twitter.com/nagpurnews3?s=11&t=8HMRzhBp7cDyqAwaBU2sRA"
            socialMediaName="twitter"
          />
          <SocialLinkForPromotionaryArticle
            icon={<BsWhatsapp />}
            link="https://wa.me/message/LWMXJ6WS46UYO1"
            socialMediaName="whatsapp"
          />
        </div>
      </div>
    </div>
  );
}
