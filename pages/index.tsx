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
        <title>
          Gerlach Family Dentistry &gt; Family Dentist &gt; Cosmetic Dental
          Services &gt; Dentist Louisville, KY
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div id="top" className="dark:bg-red">
        <Header />
        <Hero />
        <Layout />
        <Footer />

        <ContactTooth />
      </div>
    </>
  );
}
