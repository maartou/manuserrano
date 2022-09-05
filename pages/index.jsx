import Head from "next/head";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Multimedia from "../components/multimedia/Multimedia";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manuela Serrano</title>
      </Head>
      <Header/>

      <main>
        <Hero />
        <About />
        <Multimedia />
      </main>
    </>
  );
}
