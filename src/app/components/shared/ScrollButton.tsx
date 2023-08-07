import React, { useState } from "react";
import { BsArrowUp, BsArrowUpCircleFill } from "react-icons/bs";

export default function ScrollButton() {
  const [visilble, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <div
        onClick={scrollToTop}
        className="fixed bottom-0 right-0 m-5 flex justify-center items-center p-2 rounded-full text-3xl bg-primary-800 text-primary-50 shadow-lg"
      >
        <BsArrowUpCircleFill />
      </div>
    </>
  );
}
