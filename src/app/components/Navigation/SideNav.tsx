import { BiSolidCategory } from "react-icons/bi";
import { BsPeopleFill, BsTwitterX } from "react-icons/bs";
import { Category } from "../../../../types";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.jpg";
import SocialLinkForPromotionaryArticle from "../shared/SocialLinkForPromotionaryArticle";
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";

type Props = {
  categories: Category[];
  open: boolean;
  setOpen: Function;
};

export default function SideNav({ open, setOpen, categories }: Props) {
  return (
    <>
      <aside
        className={`fixed top-0 right-0 md:hidden w-screen h-screen transition-transform duration-300 z-40 ${
          open ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col justify-between bg-white border-l border-primary-600">
          <ul className="space-y-2 overflow-y-auto font-medium pb-[100px]">
            <Link href="/">
              <li
                onClick={() => setOpen(!open)}
                className="w-full flex justify-start items-center px-4 py-3.5 bg-primary-900 border-b border-primary-600"
              >
                <Image
                  src={logo}
                  className="w-6 md:w-8 mr-3 rounded-full ring-2 ring-primary-600"
                  alt="Nagpur News Logo"
                />
                <span className="self-center text-xl md:text-2xl text-primary-100 font-bold whitespace-nowrap uppercase">
                  Nagpur News
                </span>
              </li>
            </Link>
            <Link href="/category">
              <li
                onClick={() => setOpen(!open)}
                className="px-4 py-2.5 flex items-center"
              >
                <span className="mr-2">
                  <BiSolidCategory />
                </span>
                Categories
              </li>
            </Link>
            <ul className="overflow-y-auto font-medium flex flex-wrap items-start gap-2 scrollbar-hide px-3 my-2">
              {categories &&
                categories.map((category) => (
                  <Link key={category.id} href={`/category/${category.slug}`}>
                    <li
                      key={category.id}
                      onClick={() => setOpen(!open)}
                      className="cursor-pointer px-2.5 py-1.5 text-sm text-primary-800 rounded-md bg-primary-50 border border-primary-600"
                    >
                      {category.name}
                    </li>
                  </Link>
                ))}
            </ul>
            <ul>
              <Link href="/aboutus">
                <li
                  onClick={() => setOpen(true)}
                  className="px-4 py-2.5 flex items-center"
                >
                  <span className="mr-2">
                    <BsPeopleFill />
                  </span>
                  About Us
                </li>
              </Link>
            </ul>
            <ul className="flex flex-col justify-center items-center gap-2 px-4 py-8">
              <span className="flex text-sm font-bold uppercase text-slate-400 tracking-widest">
                Follow us on
              </span>
              <ul className="flex gap-2">
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
              </ul>
            </ul>
          </ul>
        </div>
      </aside>
    </>
  );
}
