"use client";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Category } from "../../../../types";
import ArticleCardMin from "./ArticleCardMin";
import { useRef } from "react";
import Link from "next/link";


type Props = {
  category: Category;
};

export default function CategoryDetails({ category }: Props) {
  const elementRef = useRef<any>(null);

  const handleHorizantalScroll = (
    element: any,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <>
      <div className="bg-primary-900 px-3.5 py-2.5 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-xl text-red-500">{category.name}</span>
          <div className="hidden md:flex text-white text-2xl">
            <button
              onClick={() =>
                handleHorizantalScroll(elementRef.current, 25, 200, -10)
              }
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              onClick={() =>
                handleHorizantalScroll(elementRef.current, 25, 200, 10)
              }
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
        <div
          className="relative overflow-x-scroll scrollbar-hide"
          ref={elementRef}
        >
          <div className="inline-flex gap-2 py-4">
            {category.article.map((article) => (
              <ArticleCardMin key={article.id} article={article} />
            ))}
          </div>
        </div>
        <div className="flex justify-end items-end">
          <Link href={`/category/${category.slug}`}>
            <div className="px-3.5 align-bottom py-1.5 text-sm text-primary-900 flex items-center justify-center bg-primary-100 rounded-full cursor-pointer">
              Explore More
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
