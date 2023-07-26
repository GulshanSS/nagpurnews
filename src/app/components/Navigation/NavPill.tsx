"use client";

import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  label: string;
};

export default function NavPill({ href, label }: Props) {
  return (
    <Link href={href}>
      <li className="hover:bg-primary-800 hover:text-primary-100 text-primary-800 text-sm font-medium px-2 py-1 rounded-md duration-300 mr-2">
        {label}
      </li>
    </Link>
  );
}
