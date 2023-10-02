import SocialLinkForPromotionaryArticle from "../shared/SocialLinkForPromotionaryArticle";
import { FiChevronsRight } from "react-icons/fi";
import { BiSolidCategory } from "react-icons/bi";
import {
  BsPeopleFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { Category } from "../../../../types";
import Link from "next/link";

type Props = {
  categories: Category[];
  open: boolean;
  setOpen: Function;
};

export default function SideNav({ open, setOpen, categories }: Props) {
  return (
    <>
      <aside
        className={`fixed top-0 right-0 w-[300px] md:hidden h-screen transition-transform ${
          open ? "translate-x-full" : "translate-x-0"
        } duration-300 z-40`}
      >
        <div className="h-full flex flex-col justify-between bg-white border-l border-primary-600">
          <ul className="space-y-2 overflow-y-auto font-medium">
            <span className="w-full flex justify-end items-center pr-5 pt-5">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="p-2 ml-3 text-2xl text-primary-50 bg-primary-900 rounded-lg sm:hidden focus:outline-none"
              >
                <FiChevronsRight />
              </button>
            </span>
            <Link href="/category">
              <li
                onClick={() => setOpen(!open)}
                className="px-4 py-1.5 flex items-center border-b border-primary-600"
              >
                <span className="mr-2">
                  <BiSolidCategory />
                </span>
                Categories
              </li>
            </Link>
            <ul className="space-y-2 overflow-y-auto font-medium flex flex-col items-start gap-1 scrollbar-hide px-3 my-2">
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
                  className="px-4 py-1.5 flex items-center border-y border-primary-600"
                >
                  <span className="mr-2">
                    <BsPeopleFill />
                  </span>
                  About Us
                </li>
              </Link>
            </ul>
          </ul>
          <ul className="flex flex-col justify-center items-center gap-2 border-t border-primary-600 bg-primary-900 py-4">
            <li className="flex gap-2 justify-center items-center">
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
            </li>
            <li>
              <span className="w-full flex justify-center md:justify-start text-[12px] text-primary-50">
                2023 &copy; Copyright Nagpur News
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
