import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navigation/Navbar";
import SubNav from "./components/Navigation/SubNav";
import Footer from "./components/Footer/Footer";
import { getAllCategories } from "./lib/category";
import BottomNav from "./components/shared/BottomNav";

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
  const { categories } = await getAllCategories();

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
          id="adsbygoogle-init"
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5092077595720219"
        ></script>
        <script
          id="adsbygoogle-fc"
          async
          nonce="1kz3Q8jUHcauoeSgBYdGAQ"
          src="https://fundingchoicesmessages.google.com/i/pub-5092077595720219?ers=1"
        ></script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        <SubNav />
        <main className="max-w-screen-xl min-h-screen flex flex-wrap mx-auto text-3xl my-4 font-bold">
          {children}
        </main>
        <Footer />
        <BottomNav categories={categories} />
      </body>
    </html>
  );
}
