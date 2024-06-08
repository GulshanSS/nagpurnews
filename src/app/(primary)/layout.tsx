import React from "react";
import Script from "next/script";
import LatestFeed from "../components/Latest/LatestFeed";
import PromotionaryArticleFeed from "../components/PromotionaryArticle/PromotionaryArticleFeed";
import { getLatestArticles } from "../lib/article";
import { getAllPromotionaryArticlesAsBanners } from "../lib/promotionaryArticles";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const latestArticlesData = getLatestArticles();
  const promotionaryArticlesData = getAllPromotionaryArticlesAsBanners();

  const [
    { articles: latestArticles },
    { promotionaryArticles: promotionaryArticlesAsBanner },
  ] = await Promise.all([latestArticlesData, promotionaryArticlesData]);

  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5092077595720219"
      />
      <Script
        strategy="afterInteractive"
        nonce="1kz3Q8jUHcauoeSgBYdGAQ"
        src="https://fundingchoicesmessages.google.com/i/pub-5092077595720219?ers=1"
      />
      <Script strategy="afterInteractive" nonce="1kz3Q8jUHcauoeSgBYdGAQ">
        {`(function() {
            function signalGooglefcPresent() {
              if (!window.frames['googlefcPresent']) {
                if (document.body) {
                  const iframe = document.createElement('iframe'); 
                  iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; 
                  iframe.style.display = 'none'; 
                  iframe.name = 'googlefcPresent'; 
                  document.body.appendChild(iframe);
                } else {
                  setTimeout(signalGooglefcPresent, 0);
                }
              }
            }
            signalGooglefcPresent();
          })();`}
      </Script>
      <div className="w-full md:w-2/3">{children}</div>
      <div className="w-full md:w-1/3">
        {latestArticles && <LatestFeed articles={latestArticles} />}
        {promotionaryArticlesAsBanner && (
          <PromotionaryArticleFeed
            promotionaryArticles={promotionaryArticlesAsBanner}
          />
        )}
      </div>
    </>
  );
}
