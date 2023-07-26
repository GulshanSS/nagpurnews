"use client";

import Image from "next/image";
import logo from "@/app/assets/logo.jpg";
import { FiChevronsRight, FiChevronsLeft, FiSearch } from "react-icons/fi";
import { useState } from "react";
import NavPill from "./NavPill";

export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <nav className="top-0 fixed w-full bg-primary-50 border-b border-primary-600 z-50">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <Image
              src={logo}
              className="w-8 mr-3 rounded-full"
              alt="Nagpur News Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Nagpur News
            </span>
          </a>
          <div className="md:flex md:flex-row justify-start items-center hidden w-80 rounded-md p-1.5 bg-inherit border border-primary-600">
            <input
              className="w-full bg-inherit focus:outline-none mr-2"
              placeholder="Search"
            />
            <span className="text-xl text-primary-800 inline-flex items-center p-1 hover:bg-primary-100 rounded-full">
              <FiSearch />
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 ml-3 text-2xl text-primary-50 bg-primary-800 rounded-lg sm:hidden focus:outline-none"
          >
            {open ? <FiChevronsLeft /> : <FiChevronsRight />}
          </button>
        </div>
      </nav>
      <nav className="top-[73px] fixed w-full bg-primary-100 border-b border-primary-600">
        <div className="max-w-screen-xl px-3 py-2 mx-auto">
          <div className="flex items-center">
            <ul className="font-medium mt-0 mr-2 space-x-8 text-sm border-r border-primary-600">
              <NavPill href="/" label="Home" />
            </ul>
            <ul className="flex flex-row overflow-x-auto scrollbar-hide">
              <NavPill href="/" label="Category" />
              <NavPill href="/" label="Category" />
              <NavPill href="/" label="Category" />
              <NavPill href="/" label="Category" />
              <NavPill href="/" label="Category" />
              <NavPill href="/" label="Category" />
              <NavPill href="/" label="Category" />
              <NavPill href="/" label="Category" />
              <NavPill href="/" label="Category" />
            </ul>
          </div>
        </div>
      </nav>
      <aside
        className={`fixed top-0 right-0 w-[300px] md:hidden h-screen transition-transform ${
          open ? "translate-x-full" : "translate-x-0"
        } duration-300`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-primary-50 border-l border-primary-600">
          <ul className="space-y-2 font-medium"></ul>
        </div>
      </aside>
    </>
  );
}
