"use client";

import Image from "next/image";
import logo from "@/app/assets/logo.jpg";
import { FiChevronsRight, FiChevronsLeft, FiSearch } from "react-icons/fi";
import { useState } from "react";
import SocialLinkForPromotionaryArticle from "../shared/SocialLinkForPromotionaryArticle";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { Category } from "../../../../types";
import Link from "next/link";

type Props = {
  categories: Category[];
};

export default function Navbar({ categories }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <nav className="top-0 fixed w-full bg-primary-50 border-b border-primary-600 z-50">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <Image
              src={logo}
              className="w-8 mr-3 rounded-full ring-2 ring-primary-600"
              alt="Nagpur News Logo"
            />
            <span className="self-center text-2xl text-primary-800 font-semibold whitespace-nowrap">
              nagpurnews
            </span>
          </a>
          {/* <div className="md:flex md:flex-row justify-start items-center hidden w-80 rounded-md px-1.5 py-1 bg-inherit border border-primary-600">
            <input
              className="w-full bg-inherit focus:outline-none mr-2"
              placeholder="Search"
            />
            <span className="text-xl text-primary-800 inline-flex items-center p-1 hover:bg-primary-100 rounded-full">
              <FiSearch />
            </span>
          </div> */}
          <div className="hidden md:flex justify-center items-center gap-2 mx-2">
            <span className="text-sm font-bold uppercase text-primary-800">
              Follow us on
            </span>
            <SocialLinkForPromotionaryArticle
              icon={<BsWhatsapp />}
              link="https://wa.me/message/LWMXJ6WS46UYO1"
            />
            <SocialLinkForPromotionaryArticle
              icon={<BsFacebook />}
              link="https://www.facebook.com/profile.php?id=100064034115032&mibextid=LQQJ4d"
            />
            <SocialLinkForPromotionaryArticle
              icon={<BsInstagram />}
              link="https://instagram.com/nagpurnews?igshid=OGQ5ZDc2ODk2ZA=="
            />
            <SocialLinkForPromotionaryArticle
              icon={<BsTwitter />}
              link="https://twitter.com/nagpurnews3?s=11&t=8HMRzhBp7cDyqAwaBU2sRA"
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 ml-3 text-2xl text-primary-50 bg-primary-900 rounded-lg sm:hidden focus:outline-none"
          >
            {open ? <FiChevronsLeft /> : <FiChevronsRight />}
          </button>
        </div>
      </nav>
      <aside
        className={`fixed top-0 right-0 w-[300px] md:hidden h-screen transition-transform ${
          open ? "translate-x-full" : "translate-x-0"
        } duration-300 z-40`}
      >
        <div className="h-full flex flex-col justify-between bg-primary-50 border-l pt-20 border-primary-600">
          <ul className="space-y-2 overflow-y-auto font-medium">
            <li className="px-4 py-1.5 flex items-center border-b border-primary-600">
              <span className="mr-2">
                <BiSolidCategory />
              </span>
              Categories
            </li>
            <ul className="space-y-2 overflow-y-auto font-medium flex flex-col items-start gap-1 scrollbar-hide px-3 my-2">
              {categories.map((category) => (
                <Link key={category.id} href={`/category/${category.id}`}>
                  <li
                    key={category.id}
                    onClick={() => setOpen(!open)}
                    className="cursor-pointer px-2.5 py-1.5 text-sm text-primary-800 rounded-md bg-primary-100 border border-primary-600"
                  >
                    {category.name}
                  </li>
                </Link>
              ))}
            </ul>
          </ul>
          <ul className="flex flex-col justify-center items-center gap-2 border-t border-primary-600 bg-primary-900 py-4">
            <li className="flex gap-2 justify-center items-center">
              <SocialLinkForPromotionaryArticle
                icon={<BsWhatsapp />}
                link="https://wa.me/message/LWMXJ6WS46UYO1"
              />
              <SocialLinkForPromotionaryArticle
                icon={<BsFacebook />}
                link="https://www.facebook.com/profile.php?id=100064034115032&mibextid=LQQJ4d"
              />
              <SocialLinkForPromotionaryArticle
                icon={<BsInstagram />}
                link="https://instagram.com/nagpurnews?igshid=OGQ5ZDc2ODk2ZA=="
              />
              <SocialLinkForPromotionaryArticle
                icon={<BsTwitter />}
                link="https://twitter.com/nagpurnews3?s=11&t=8HMRzhBp7cDyqAwaBU2sRA"
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
