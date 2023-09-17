"use client";
import { HiHome } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import SideNav from "../Navigation/SideNav";
import { Category } from "../../../../types";
import { useState } from "react";

type Props = {
  categories: Category[];
};

export default function BottomNav({ categories }: Props) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <SideNav open={open} setOpen={setOpen} categories={categories} />
      <div className="block fixed md:hidden bottom-0 w-full bg-primary-900 px-3.5 py-2.5">
        <div className="w-full flex justify-between items-center">
          <Link href="/">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-primary-50 text-xl">
                <HiHome />
              </span>
              <span className="text-primary-50 text-[10px]">Home</span>
            </div>
          </Link>
          <Link href="/category">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-primary-50 text-xl">
                <IoNewspaperOutline />
              </span>
              <span className="text-primary-50 text-[10px]">Category</span>
            </div>
          </Link>
          <Link href="/search">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-primary-50 text-xl">
                <FiSearch />
              </span>
              <span className="text-primary-50 text-[10px]">Search</span>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://instagram.com/nagpurnews?igshid=OGQ5ZDc2ODk2ZA=="
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-primary-50 text-xl">
                <BsInstagram />
              </span>
              <span className="text-primary-50 text-[10px]">Connect</span>
            </div>
          </Link>
          <div
            onClick={() => setOpen(false)}
            className="flex flex-col justify-center items-center gap-2"
          >
            <span className="text-primary-50 text-xl">
              <TfiMenuAlt />
            </span>
            <span className="text-primary-50 text-[10px]">Menu</span>
          </div>
        </div>
      </div>
    </>
  );
}
