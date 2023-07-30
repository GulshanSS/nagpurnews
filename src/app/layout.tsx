import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navigation/Navbar";
import SubNav from "./components/Navigation/SubNav";
import Footer from "./components/Footer/Footer";
import { getAllCategories } from "./lib/category";

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

  const { categories } = await categoryData;

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar categories={categories} />
        <SubNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
