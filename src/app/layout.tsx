import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navigation/Navbar";
import SubNav from "./components/Navigation/SubNav";
import Footer from "./components/Footer/Footer";
import { getAllCategories } from "./lib/category";
import LatestFeed from "./components/Latest/LatestFeed";
import PromotionaryArticleFeed from "./components/PromotionaryArticle/PromotionaryArticleFeed";
import { getLatestArticles } from "./lib/article";
import { getAllPromotionaryArticlesAsBanners } from "./lib/promotionaryArticles";
import BottomNav from "./components/shared/BottomNav";
import AllTags from "./components/Tag/AllTags";
import { getAllTags } from "./lib/tag";

const poppins = Poppins({ weight: "500", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "NagpurNews",
  description: "Daily news lookup",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const latestArticlesData = getLatestArticles();
  const promotionaryArticlesData = getAllPromotionaryArticlesAsBanners();
  const categoryData = getAllCategories();
  const tagsData = getAllTags();

  const [
    { articles: latestArticles },
    { promotionaryArticles: promotionaryArticlesAsBanner },
    { categories },
    { tags },
  ] = await Promise.all([
    latestArticlesData,
    promotionaryArticlesData,
    categoryData,
    tagsData,
  ]);

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2413455566721235"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        <SubNav />
        <main className="max-w-screen-xl min-h-screen flex flex-wrap mx-auto text-3xl my-4 font-bold">
          <div className="w-full md:w-2/3">{children}</div>
          <div className="w-full md:w-1/3">
            <div className="mx-4 mb-5">
              <AllTags headline="Explore Tags" tags={tags} />
            </div>
            {latestArticles && <LatestFeed articles={latestArticles} />}
            <PromotionaryArticleFeed
              promotionaryArticles={promotionaryArticlesAsBanner}
            />
          </div>
        </main>
        <Footer />
        <BottomNav categories={categories} />
      </body>
    </html>
  );
}
