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
        <title>Privacy Policy - Gerlach Family Dentistry</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Header />
      <div id="top" className="dark:bg-red max-w-7xl mx-auto">
        <div id="top" className="text-black dark:bg-red">
          <h1>Privacy Policy for Gerlach Family Dentistry</h1>
          <p>Last Updated: 20 OCT 2023</p>

          <h2>1. Introduction:</h2>
          <p>
            Welcome to the privacy policy of Gerlach Family Dentistry. We
            respect your privacy and are committed to protecting your personal
            data. This policy will inform you about how we treat your personal
            data when you visit our website.
          </p>

          <h2>2. Data We Collect:</h2>
          <ul>
            <li>
              <strong>Identity Data:</strong> Includes your first name, last
              name, title, and gender.
            </li>
            <li>
              <strong>Contact Data:</strong> Includes your billing address,
              email address, and telephone numbers.
            </li>
            <li>
              <strong>Health Data:</strong> Any relevant medical history or
              treatment details you provide to us.
            </li>
            <li>
              <strong>Technical Data:</strong> Includes internet protocol (IP)
              address, browser type/version, time zone settings, and other
              technology data.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website and services.
            </li>
          </ul>

          <h2>3. How We Use Your Data:</h2>
          <ul>
            <li>
              <strong>Appointment Management:</strong> To schedule, reschedule,
              or cancel appointments.
            </li>
            <li>
              <strong>Billing:</strong> To process payments or claims.
            </li>
            <li>
              <strong>Communication:</strong> To provide updates or newsletters.
            </li>
            <li>
              <strong>Website Improvement:</strong> To ensure content is
              presented in the most effective manner.
            </li>
          </ul>

          <h2>4. Data Sharing and Disclosure:</h2>
          <p>
            We may share your personal data with third-party service providers
            for the purposes of providing our services. We require all third
            parties to respect the security of your personal data and to treat
            it in accordance with the law.
          </p>

          <h2>5. Data Security:</h2>
          <p>
            We have implemented appropriate security measures to prevent your
            personal data from being lost, used, or accessed unlawfully.
          </p>

          <h2>6. Data Retention:</h2>
          <p>
            We will only retain your personal data for as long as necessary for
            the purposes it was collected for.
          </p>

          <h2>7. Your Rights:</h2>
          <ul>
            <li>
              <strong>Access:</strong> You have the right to request access to
              your personal data.
            </li>
            <li>
              <strong>Correction:</strong> You have the right to request
              correction of any inaccurate personal data.
            </li>
            <li>
              <strong>Deletion:</strong> You have the right to request deletion
              of your personal data.
            </li>
            <li>
              <strong>Objection:</strong> You can object to the processing of
              your personal data.
            </li>
          </ul>

          <h2>8. Cookies:</h2>
          <p>
            Our website uses cookies to provide a better user experience. You
            can choose to disable cookies through your browser.
          </p>

          <h2>9. Changes to This Policy:</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be communicated on our website.
          </p>

          <h2>10. Contact Us:</h2>
          <p>
            If you have any questions regarding this policy or about our privacy
            practices, please contact us at:
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
