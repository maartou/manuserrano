import Head from "next/head";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Multimedia from "../components/multimedia/Multimedia";
import Recaudaciones from "../components/recaudaciones/Recaudaciones";
import Counter from "../components/counter/Counter";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manuela Serrano | De camino al Berklee</title>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>

      <Header/>

      <main>
        <Hero />
        <About />
        <Multimedia />
        <Recaudaciones />
        <Counter />
      </main>

      <Footer />
    </>
  );
}
