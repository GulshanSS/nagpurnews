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
      <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Privacy Policy
        </h1>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Introduction
        </h2>
        <p className="mb-4 text-lg">
          Nagpur News (operated by Northwind Media Private Limited) is committed
          to protecting the privacy of our visitors. This Privacy Policy
          explains how we collect, use, and safeguard your personal information
          when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Information We Collect
        </h2>
        <p className="mb-4 text-lg">
          We may collect personal and non-personal information through various
          methods:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg space-y-2">
          <li>
            <strong>Personal Information:</strong> This includes names, email
            addresses, or phone numbers when you subscribe to our newsletter or
            interact with certain features on the site.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> This includes data about
            your browsing habits, such as your IP address, browser type, and
            pages you visit.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          How We Use the Information
        </h2>
        <p className="mb-4 text-lg">
          The information collected is used to improve our website’s
          performance, deliver personalized content, and display relevant
          advertisements. Specifically, we may use your information for the
          following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg space-y-2">
          <li>To send you news updates via email.</li>
          <li>To respond to your inquiries or requests.</li>
          <li>
            To optimize the user experience by analyzing traffic patterns.
          </li>
          <li>
            To display targeted ads through Google AdSense based on your
            browsing behavior.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Google AdSense and Cookies
        </h2>
        <p className="mb-4 text-lg">
          We use Google AdSense to display ads on our website. Google may use
          cookies to serve ads based on your prior visits to our website. These
          cookies allow Google and its partners to provide personalized ads
          based on your interests. You can manage or opt-out of personalized
          advertising by visiting{" "}
          <a
            href="https://adssettings.google.com/"
            className="text-blue-600 underline"
          >
            Google’s Ad Settings
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Data Protection and Security
        </h2>
        <p className="mb-4 text-lg">
          We take the security of your personal data seriously. We implement
          standard security measures, including SSL encryption, to protect your
          information from unauthorized access, disclosure, or alteration.
        </p>
        <p className="mb-4 text-lg">
          However, no method of data transmission over the internet is 100%
          secure, and we cannot guarantee the absolute security of your data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Sharing of Information
        </h2>
        <p className="mb-4 text-lg">
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties. However, we may share
          non-personally identifiable information with trusted third-party
          service providers who assist us in operating our website or analyzing
          user behavior.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Your Rights
        </h2>
        <p className="mb-4 text-lg">As a user, you have the right to:</p>
        <ul className="list-disc pl-6 mb-4 text-lg space-y-2">
          <li>Access the personal data we hold about you.</li>
          <li>Request corrections to any inaccuracies in your data.</li>
          <li>Opt-out of any email communications.</li>
          <li>Request the deletion of your personal information.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Third-Party Links
        </h2>
        <p className="mb-4 text-lg">
          Our website may include links to third-party websites. We are not
          responsible for the privacy practices or the content of these external
          sites. Please review their respective privacy policies when visiting
          them.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Children’s Privacy
        </h2>
        <p className="mb-4 text-lg">
          Our website is not intended for children under the age of 13, and we
          do not knowingly collect personal information from children. If you
          believe your child has provided personal information, please contact
          us so we can delete the information promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-lg">
          We reserve the right to update this Privacy Policy at any time. Any
          changes will be posted on this page with a revised date. Your
          continued use of the website after such changes constitutes acceptance
          of the updated policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Contact Information
        </h2>
        <p className="mb-4 text-lg">
          For questions regarding this Privacy Policy, please contact us at:
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
