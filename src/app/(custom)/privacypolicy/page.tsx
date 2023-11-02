import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Privacy Policy | Nagpur News",
    alternates: {
      canonical: `https://www.nagpurnews.live/aboutus`,
    },
    manifest: "/images/site.webmanifest",
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/images/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/images/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/images/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/images/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  };
}

export default function PrivacyPolicy() {
  return (
    <>
      <div>
        <h1 className="uppercase mb-5 text-center">Privacy Policy</h1>
        <ol className="list-decimal text-sm flex flex-col gap-4 tracking-wide mx-8 mb-5 text-justify">
          <li>
            <span>Introduction</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                Nagpur News is committed to protecting your privacy. This
                Privacy Policy describes how your personal information is
                collected, used, and shared when you visit our website.
              </li>
            </ul>
          </li>
          <li>
            <span>Information We Collect</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                <span className="font-bold">Log Data:</span> When you visit
                Nagpur News, our servers automatically record information that
                your browser sends. This may include information such as your
                computer's Internet Protocol "IP" address, browser version,
                pages of our site that you visit, the time and date of your
                visit, and other statistics.
              </li>
              <li>
                <span className="font-bold">Cookies:</span> We use "cookies" to
                collect information and improve our services. You have the
                option to either accept or refuse these cookies and know when a
                cookie is being sent to your computer.
              </li>
            </ul>
          </li>
          <li>
            <span>How We Use Your Information</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                We use the information we collect to analyze how our website is
                used, improve our content and services, and provide you with a
                more personalized experience.
              </li>
            </ul>
          </li>
          <li>
            <span>Sharing Your Information</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                We do not share your personal information with any third parties
                unless required by law.
              </li>
            </ul>
          </li>
          <li>
            <span>Your Choices</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                You have the right to access personal information we hold about
                you and to ask that your personal information be corrected,
                updated, or deleted.
              </li>
            </ul>
          </li>
          <li>
            <span>Changes to This Privacy Policy</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                We may update this Privacy Policy from time to time to reflect
                changes to our practices or for other operational, legal, or
                regulatory reasons.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
}
