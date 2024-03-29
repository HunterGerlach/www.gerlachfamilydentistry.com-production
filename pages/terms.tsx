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
        <title>Terms &amp; Conditions - Gerlach Family Dentistry</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Header />
      <div id="top" className="dark:bg-red max-w-7xl mx-auto">
        <div id="top" className="text-black dark:bg-red">
          <h1>Terms of Service for Gerlach Family Dentistry</h1>
          <p>Last Updated: 20 OCT 2023</p>

          <h2>1. Introduction:</h2>
          <p>
            Welcome to Gerlach Family Dentistry. By using our website and
            services, you agree to the following terms and conditions.
          </p>

          <h2>2. Acceptance of Terms:</h2>
          <p>
            By accessing this website, you accept these terms of service in
            full. If you disagree with these terms, or any part of these terms,
            you must not use our website.
          </p>

          <h2>3. Service Usage:</h2>
          <p>
            All services provided by Gerlach Family Dentistry are for personal
            and non-commercial use. Unauthorized use of our services is strictly
            prohibited.
          </p>

          <h2>4. Content:</h2>
          <p>
            All content on this website, including text, images, and logos, is
            the property of Gerlach Family Dentistry and is protected by
            copyright laws.
          </p>

          <h2>5. User Conduct:</h2>
          <p>
            You must not use our website in a way that causes, or may cause,
            damage or impairment of the availability or accessibility of the
            website.
          </p>

          <h2>6. Limitation of Liability:</h2>
          <p>
            Under no circumstances shall Gerlach Family Dentistry be liable for
            any direct, indirect, incidental, or consequential damages resulting
            from the use or inability to use our services.
          </p>

          <h2>7. Privacy:</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy to
            understand our practices.
          </p>

          <h2>8. Changes to the Terms:</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be communicated on our website. Your continued use of our services
            after changes have been made signifies your acceptance of the
            modified terms.
          </p>

          <h2>9. Governing Law:</h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of the jurisdiction where Gerlach Family Dentistry operates.
          </p>

          <h2>10. Contact:</h2>
          <p>
            For any questions or concerns regarding these terms, please contact:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:staff@gerlachfamilydentistry.com">
                staff@gerlachfamilydentistry.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:502-244-0333">502-244-0333</a>
            </li>
            <li>Address: 11900 Shelbyville Rd</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
