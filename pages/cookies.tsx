{
  /* A generic privacy policy page built in Next.js */
}
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ContactTooth from "../components/MollyMolar";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Gerlach Family Dentistry</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Header />
      <div id="top" className="dark:bg-red max-w-7xl mx-auto">
        <div id="top" className="text-black dark:bg-red">
          <h1 className="text-2xl font-bold mb-4">Cookie Policy</h1>

          <section>
            <h2 className="text-xl font-semibold mt-4 mb-2">Introduction</h2>
            <p>
              Our website, Gerlach Family Dentistry, uses cookies. By using our
              website and agreeing to this policy, you consent to our use of
              cookies in accordance with the terms of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              What are cookies?
            </h2>
            <p>
              Cookies are small files that are stored on a user%apos;s computer.
              They are designed to hold a modest amount of data specific to a
              particular client and website, and can be accessed either by the
              web server or the client computer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              How we use cookies
            </h2>
            <p>
              Cookies do not contain any information that personally identifies
              you, but personal information that we store about you may be
              linked to the information stored in and obtained from cookies. We
              may use the information we obtain from your use of our cookies for
              the following purposes:
            </p>
            <ul className="list-disc pl-5">
              <li>Improve website usability</li>
              <li>Analyze the use of the website</li>
              <li>Administer the website</li>
              <li>Prevent fraud and improve website security</li>
              <li>
                Personalize our website for you (remembering your preferences,
                etc.)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              Third-party cookies
            </h2>
            <p>
              Our website also uses third-party cookies. These cookies are often
              used for analytics, advertising, or tracking users across
              different websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              Blocking and Deleting Cookies
            </h2>
            <p>
              You can manage preferences for cookies directly from within your
              web browser, preventing – for example – third parties from
              installing cookies. Through browser preferences, it is also
              possible to delete cookies installed in the past. It is important
              to note that disabling all cookies might affect the functionality
              of this and many other websites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-4 mb-2">Contact</h2>
            <p>
              If you have any questions about our cookies or this Cookie Policy,
              please contact:
            </p>
            <p>
              Email:{" "}
              <a href="mailto:staff@gerlachfamilydentistry.com">
                staff@gerlachfamilydentistry.com
              </a>
            </p>
            <p>Phone: 502-244-0333</p>
            <p>Address: 11900 Shelbyville Rd</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
