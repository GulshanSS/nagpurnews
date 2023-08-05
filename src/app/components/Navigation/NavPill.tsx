"use client";

import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  label: string;
  icon?: JSX.Element;
};

export default function NavPill({ href, label, icon }: Props) {
  return (
    <Link href={href}>
      <li className="hover:bg-primary-50 hover:text-primary-800 text-primary-50 text-sm text whitespace-nowrap font-medium px-2 py-1 rounded-sm duration-300 mr-2">
        {icon ? <span className="text-xl">{icon}</span> : label}
      </li>
    </Link>
  );
}
