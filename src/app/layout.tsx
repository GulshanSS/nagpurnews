import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navigation/Navbar";
import SubNav from "./components/Navigation/SubNav";
import Footer from "./components/Footer/Footer";
import { getAllCategories } from "./lib/category";
import LatestFeed from "./components/Latest/LatestFeed";
import { getLatestArticles } from "./lib/article";
import { getAllPromotionaryArticlesAsBanners } from "./lib/promotionaryArticles";
import PromotionaryArticleFeed from "./components/PromotionaryArticle/PromotionaryArticleFeed";

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
  const categoryData = getAllCategories();

  const latestArticlesData = getLatestArticles();

  const promotionaryArticlesData = getAllPromotionaryArticlesAsBanners();

  const { categories } = await categoryData;

  const { articles: latestArticles } = await latestArticlesData;

  const { promotionaryArticles: promotionaryArticlesAsBanner } = await promotionaryArticlesData


  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar categories={categories} />
        <SubNav />
        <main className="max-w-screen-xl flex flex-wrap mx-auto text-3xl mt-32 font-bold">
          <div className="md:w-2/3">
            {children}
          </div>
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
