import Image from "next/image";
import logo from "@/app/assets/logo.jpg";
import SocialLinkForPromotionaryArticle from "../shared/SocialLinkForPromotionaryArticle";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="top-0 w-full border-b border-primary-600 z-50">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2.5">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={logo}
                className="w-6 md:w-8 mr-3 rounded-full ring-2 ring-primary-600"
                alt="Nagpur News Logo"
              />
              <span className="self-center text-xl md:text-2xl text-primary-900 font-semibold whitespace-nowrap capitalize">
                Nagpur News
              </span>
            </div>
          </Link>
          <Link href="/search">
            <div className="w-24 md:w-64 flex flex-row justify-between items-center p-1.5 md:p-2.5 text-primary-900 bg-primary-100 border border-primary-600 rounded-full">
              <span className="text-sm">Search</span>
              <span className="text-xl">
                <FiSearch />
              </span>
            </div>
          </Link>
          <div className="hidden md:flex justify-center items-center gap-2 mx-2">
            <span className="hidden lg:flex text-sm font-bold uppercase text-primary-900">
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
              icon={<BsTwitter />}
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
      </nav>
    </>
  );
}
