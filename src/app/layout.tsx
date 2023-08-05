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

  const [
    { articles: latestArticles },
    { promotionaryArticles: promotionaryArticlesAsBanner },
    { categories },
  ] = await Promise.all([
    latestArticlesData,
    promotionaryArticlesData,
    categoryData,
  ]);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar categories={categories} />
        <SubNav />
        <main className="max-w-screen-xl min-h-screen flex flex-wrap mx-auto text-3xl my-10 font-bold">
          <div className="md:w-2/3">{children}</div>
          <div className="md:w-1/3">
            <LatestFeed articles={latestArticles} />
            <PromotionaryArticleFeed
              promotionaryArticles={promotionaryArticlesAsBanner}
            />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
