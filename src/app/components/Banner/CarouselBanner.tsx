import React, { useEffect, useRef, useState } from "react";
import { Article } from "../../../../types";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Link from "next/link";
import { CgTimelapse } from "react-icons/cg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type Props = {
  slides: Article[];
};

export default function CarouselBanner({ slides = [] as Article[] }: Props) {
  dayjs.extend(relativeTime);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(function () {
      if (currentIndex !== slides.length - 1) {
        setCurrentIndex((c) => c + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, [currentIndex]);

  return (
    <div className="w-full group">
      <div className="w-full relative bg-black rounded-md">
        {slides.length > 0 &&
          slides[currentIndex].media[0].type.startsWith("image/") && (
            <Link
              href={`/article/${slides[currentIndex].id}/${slides[currentIndex].slug}`}
            >
              <div className="h-60 md:h-[500px] flex justify-center bg-black rounded-md">
                <img
                  loading="lazy"
                  alt={slides[currentIndex].title}
                  className="w-full h-full overflow-hidden object-cover duration-500 rounded-md"
                  src={slides[currentIndex].media[0].key}
                />
              </div>
            </Link>
          )}
        {slides.length > 0 &&
          slides[currentIndex].media[0].type.startsWith("video/") && (
            <Link
              href={`/article/${slides[currentIndex].id}/${slides[currentIndex].slug}`}
            >
              <div className="h-60 md:h-[500px] flex justify-center bg-black rounded-md">
                <video
                  playsInline
                  className="rounded-md"
                  src={slides[currentIndex].media[0].key}
                  loop
                  controls
                  autoPlay
                  muted
                >
                  <source
                    src={slides[currentIndex].media[0].key}
                    type={slides[currentIndex].media[0].type}
                  />
                </video>
              </div>
            </Link>
          )}
        {slides.length > 1 && (
          <div>
            <div
              onClick={prevSlide}
              className="hidden md:group-hover:block absolute top-[50%] border text-primary-800 border-primary-600 bg-primary-50 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-custom-800 bg-opacity-20 text-custom-50 cursor-pointer"
            >
              <BsChevronCompactLeft size={30} />
            </div>
            <div
              onClick={nextSlide}
              className="hidden md:group-hover:block absolute top-[50%] text-primary-800 bg-primary-50 border border-primary-600 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-custom-800 bg-opacity-20 text-custom-50 cursor-pointer"
            >
              <BsChevronCompactRight size={30} />
            </div>
          </div>
        )}
      </div>

      <div className="py-2.5 px-2">
        <div className="mb-2 flex gap-2">
          {slides.length > 0 &&
            slides[currentIndex].category.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}/${category.slug}`}
              >
                <span className="text-sm px-2 py-1 bg-red-600 text-primary-50 font-medium uppercase rounded-full shadow-md">
                  {category.name}
                </span>
              </Link>
            ))}
        </div>
        <Link
          href={`/article/${slides[currentIndex].id}/${slides[currentIndex].slug}`}
        >
          <div className="text-sm md:text-xl w-full text-justify leading-tight font-bold text-primary-900 capitalize">
            <span>{slides.length > 0 && slides[currentIndex].title}</span>
          </div>
          {slides.length > 0 && (
            <div
              className="text-[14px] text-slate-600 leading-6 font-medium pt-2 line-clamp-div carousel-banner-card"
              dangerouslySetInnerHTML={{
                __html: slides[currentIndex].content,
              }}
            ></div>
          )}
          <div className="flex items-center text-gray-400 text-[12px]">
            <span className="mr-1.5">
              <CgTimelapse />
            </span>
            {dayjs(slides[currentIndex].updatedAt).from(Date.now())}
          </div>
        </Link>
      </div>
    </div>
  );
}
