"use client";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Media } from "../../../../types";

type Props = {
  slides: Media[];
};

export default function Carousel({ slides }: Props) {
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

  return (
    <>
      <div className="w-full relative group">
        <div className="h-60 md:h-[500px] flex justify-center bg-black">
          {slides[currentIndex].type.startsWith("image/") && (
            <img
              loading="lazy"
              alt={slides[currentIndex].articleId}
              className="object-cover w-full h-full overflow-hidden duration-500"
              src={slides[currentIndex].key}
            />
          )}
          {slides[currentIndex].type.startsWith("video/") && (
            <video
              playsInline
              src={slides[currentIndex].key}
              loop
              controls
              autoPlay
              muted
            />
          )}
          {slides.length > 1 && (
            <>
              <div
                onClick={prevSlide}
                className="hidden md:group-hover:block absolute top-[50%] border text-primary-600 border-primary-600 bg-primary-50 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-custom-800 bg-opacity-20 text-custom-50 cursor-pointer"
              >
                <BsChevronCompactLeft size={30} />
              </div>
              <div
                onClick={nextSlide}
                className="hidden md:group-hover:block absolute top-[50%] text-primary-600 bg-primary-50 border border-primary-600 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-custom-800 bg-opacity-20 text-custom-50 cursor-pointer"
              >
                <BsChevronCompactRight size={30} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
