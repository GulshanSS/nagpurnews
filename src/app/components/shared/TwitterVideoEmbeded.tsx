"use client";

import { useEffect, useState } from "react";

const TwitterVideoEmbeded = ({ content }: { content: String }) => {
  
  const [scriptLoaded, setScriptLoaded] = useState(false);
  
  useEffect(() => {
    const scriptId = "my-twitter-script";
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          resolve(1);
        };
        script.onerror = () => {
          reject(new Error("Script load error"));
        };
        document.body.appendChild(script);
      });
    };
    loadScript()
      .then(() => {
        setScriptLoaded(true);
      })
      .catch((error) => {
        console.error("Script load error:", error);
      });
  }, []);

  if (!scriptLoaded) {
    return <div>Loading Twitter Script</div>;
  }

  return (
    <div
      className="flex justify-center items-center my-2 text-[0px]"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    ></div>
  );
};

export default TwitterVideoEmbeded;
