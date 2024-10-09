import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  return {
    title: "Terms & Conditions | Nagpur News",
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

export default function TermsAndConditions() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 rounded-lg text-justify">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Terms and Conditions
        </h1>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Introduction
        </h2>
        <p className="mb-4 text-lg">
          Welcome to Nagpur News, a website operated by Northwind Media Private
          Limited. These terms and conditions outline the rules and regulations
          for the use of our website. By accessing this website, you agree to be
          bound by these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Acceptance of Terms
        </h2>
        <p className="mb-4 text-lg">
          By accessing and using our website, you agree to comply with these
          Terms and Conditions, along with our Privacy Policy. If you do not
          agree with any part of the terms, you must not access the site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Website Content
        </h2>
        <p className="mb-4 text-lg">
          Nagpur News provides real-time updates and articles related to local
          news, viral content, and relevant happenings. We strive to provide
          accurate and up-to-date information; however, we do not guarantee the
          completeness or reliability of the content.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          User Responsibilities
        </h2>
        <p className="mb-4 text-lg">
          As a user of Nagpur News, you agree not to misuse the website.
          Prohibited actions include:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg space-y-2">
          <li>Posting defamatory, obscene, or unlawful content.</li>
          <li>Attempting to hack or disrupt the website's services.</li>
          <li>Using our content without proper permission.</li>
        </ul>
        <p className="mb-4 text-lg">
          We reserve the right to remove any user-generated content that
          violates these terms or is deemed inappropriate.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Intellectual Property
        </h2>
        <p className="mb-4 text-lg">
          All intellectual property rights for the materials on Nagpur News,
          including articles, images, videos, and logos, belong to Northwind
          Media Private Limited unless otherwise stated. Users may view and
          download content for personal use, but reproduction for commercial
          purposes is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Third-Party Links and Advertisements
        </h2>
        <p className="mb-4 text-lg">
          The website may contain links to third-party websites or services that
          are not owned or controlled by us. We do not assume responsibility for
          the content or privacy practices of these third-party sites. In
          addition, our website runs ads via Google Ads, which are governed by
          Google's own privacy and content policies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Indemnification
        </h2>
        <p className="mb-4 text-lg">
          By using our website, you agree to indemnify and hold harmless Nagpur
          News, Northwind Media Private Limited, and its employees from any
          claims, damages, or legal fees arising from your use of the site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Limitation of Liability
        </h2>
        <p className="mb-4 text-lg">
          Northwind Media Private Limited will not be liable for any indirect,
          incidental, or consequential damages arising from the use of the
          website, including but not limited to errors, interruptions, or
          inaccuracies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Termination
        </h2>
        <p className="mb-4 text-lg">
          We reserve the right to terminate or suspend your access to Nagpur
          News without prior notice, if you violate these terms or engage in
          activities deemed harmful to the site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Changes to Terms and Conditions
        </h2>
        <p className="mb-4 text-lg">
          We may revise these terms at any time. You are advised to review this
          page periodically. Continued use of the website signifies your
          acceptance of any changes made.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Contact Information
        </h2>
        <p className="mb-4 text-lg">
          For any questions regarding these Terms and Conditions, please contact
          us at:
        </p>
        <address className="not-italic text-lg">
          <p className="mb-1">Northwind Media Private Limited</p>
          <p className="mb-1">Address: Nagpur, Maharashtra, 440015</p>
          <p>
            Email:{" "}
            <a
              href="mailto:northwindmedia01@gmail.com"
              className="text-blue-600 underline"
            >
              northwindmedia01@gmail.com
            </a>
          </p>
        </address>
      </div>
    </>
  );
}
