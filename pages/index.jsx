import Head from "next/head";
import Image from "next/image";

import Hero from "../components/hero/Hero";
import About from "../components/about/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manuela Serrano</title>
      </Head>

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
