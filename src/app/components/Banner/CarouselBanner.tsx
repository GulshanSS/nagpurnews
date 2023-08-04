import React, { useEffect, useRef, useState } from "react";
import { Article } from "../../../../types";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Link from "next/link";

type Props = {
  slides: Article[];
  heightVariant: string;
};

export default function CarouselBanner({
  slides = [] as Article[],
  heightVariant,
}: Props) {
  const variant: any = {
    small: "h-[100px]",
    large: "h-[500px]",
    normal: "h-[200px]",
  };

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
    <div className="w-full group my-4">
      <div
        className={`${variant[heightVariant]} relative flex justify-center bg-black rounded-md`}
      >
        {slides.length > 0 &&
          slides[currentIndex].media[0].type.startsWith("image/") && (
            <img
              alt={slides[currentIndex].title}
              className="h-full object-cover duration-500 rounded-md"
              src={slides[currentIndex].media[0].key}
            />
          )}
        {slides.length > 0 &&
          slides[currentIndex].media[0].type.startsWith("video/") && (
            <video
              playsInline
              className={`${variant[heightVariant]} w-full rounded-md`}
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
          )}
        {slides.length > 1 && (
          <>
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
          </>
        )}
      </div>
      <div className="py-2.5 px-2">
        <div className="mb-4">
          {slides.length > 0 &&
            slides[currentIndex].category.map((category) => (
              <Link key={category.id} href={`/category/${category.id}`}>
                <span className="text-sm px-2 py-1 bg-widget-100 text-primary-50 font-medium uppercase rounded-full shadow-md">
                  {category.name}
                </span>
              </Link>
            ))}
        </div>
        <Link href={`/article/${slides[currentIndex].id}`}>
          <div className="text-2xl w-full border-b border-primary-600 font-medium text-primary-800 pb-2">
            {slides.length > 0 && slides[currentIndex].title}
          </div>
          {slides.length > 0 && (
            <div
              className="text-[14px] text-primary-800 leading-4 font-medium pt-2 line-clamp-div carousel-banner-card"
              dangerouslySetInnerHTML={{
                __html: slides[currentIndex].content,
              }}
            ></div>
          )}
        </Link>
      </div>
    </div>
  );
}
