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
      <div>
        <h1 className="uppercase mb-5 text-center">Terms & Conditions</h1>
        <ol className="list-decimal text-sm flex flex-col gap-4 tracking-wide mx-8 mb-5 text-justify">
          <li>
            <span>Introduction</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                Welcome to Nagpur News. By accessing this website, you agree to
                be bound by these Terms and Conditions, all applicable laws, and
                regulations. If you do not agree with any of these terms, you
                are prohibited from using or accessing this site.
              </li>
            </ul>
          </li>
          <li>
            <span>Use License</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                Permission is granted to temporarily download one copy of the
                materials on Nagpur News for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of
                title.
              </li>
              <li>
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by Nagpur News at any
                time. Upon terminating your viewing of these materials or upon
                the termination of this license, you must destroy any downloaded
                materials in your possession whether in electronic or printed
                format.
              </li>
            </ul>
          </li>
          <li>
            <span>Privacy</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                Your use of our website is also governed by our Privacy Policy,
                which can be found{" "}
                <Link href="/privacypolicy" className="text-blue-500 underline">
                  here
                </Link>
                .
              </li>
            </ul>
          </li>
          <li>
            <span>Disclaimer</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                The materials on Nagpur News are provided on an 'as is' basis.
                We make no warranties, expressed or implied, and hereby disclaim
                and negate all other warranties, including without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </li>
            </ul>
          </li>
          <li>
            <span>Limitations</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                In no event shall Nagpur News or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on Nagpur News, even if
                Nagpur News or a Nagpur News authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </li>
            </ul>
          </li>
          <li>
            <span>Revisions and Errata</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                The materials appearing on Nagpur News could include technical,
                typographical, or photographic errors. Nagpur News does not
                warrant that any of the materials on its website are accurate,
                complete, or current.
              </li>
            </ul>
          </li>
          <li>
            <span>Links</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                Nagpur News has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Nagpur News of the site. Use of any such linked
                website is at the user's own risk.
              </li>
            </ul>
          </li>
          <li>
            <span>Modifications</span>
            <ul className="list-disc font-light text-sm ml-4">
              <li>
                Nagpur News may revise these terms of service for its website at
                any time without notice. By using this website, you are agreeing
                to be bound by the then-current version of these Terms and
                Conditions.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
}
