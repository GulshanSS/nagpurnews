"use client";
import React, { useEffect, useState } from "react";
import {
  BsWhatsapp,
  BsFacebook,
  BsTelegram,
  BsTwitter,
  BsShareFill,
} from "react-icons/bs";

type Props = {
  url: string;
  title: string;
};

export default function Share({ url, title }: Props) {
  const [showNativeShare, setShowNativeShare] = useState<boolean>(false);

  const BaseUrl = process.env.NEXT_PUBLIC_CLIENT_URI as string;

  const shareData = {
    title,
    url: `${BaseUrl}/${url}`,
  };

  useEffect(() => {
    if (!navigator.canShare) {
      setShowNativeShare(false);
    } else if (navigator.canShare(shareData)) {
      setShowNativeShare(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNativeShare = () => {
    navigator.share(shareData);
  };

  return (
    <>
      <ul className="flex gap-8 justify-between md:justify-start items-center text-primary-800 mb-4 mx-2.5 py-2 md:py-0">
        <li>
          <a
            target="_blank"
            href={`whatsapp://send?text=${title} ${BaseUrl}/${url}`}
          >
            <span className="text-xl rounded-full">
              <BsWhatsapp />
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${BaseUrl}/${url}`}
          >
            <span className="text-xl rounded-full">
              <BsFacebook />
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href={`tg://msg_url?url=${BaseUrl}/${url}&text=${title}`}
          >
            <span className="text-xl rounded-full">
              <BsTelegram />
            </span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href={`http://twitter.com/intent/tweet?text=${title}&url=${BaseUrl}/${url}`}
          >
            <span className="text-xl rounded-full">
              <BsTwitter />
            </span>
          </a>
        </li>
        {showNativeShare && (
          <li>
            <button onClick={handleNativeShare}>
              <span className="text-xl rounded-full">
                <BsShareFill />
              </span>
            </button>
          </li>
        )}
      </ul>
    </>
  );
}
