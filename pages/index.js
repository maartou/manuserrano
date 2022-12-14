import Head from "next/head";
import Script from "next/script";

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
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-GLYDPSK39B"
      ></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-GLYDPSK39B');
  `}
      </Script>

      <Head>
        <title>Manuela Serrano | De camino al Berklee</title>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
        <meta
          name="description"
          content="Hola soy Manu! Músico y Cantautora venezolana: Especialista en Música Moderna y Productora Musical en formación, escucha mi historia y acómpañame de camino al Berklee."
        />
        <meta
          name="keywords"
          content="Manuela Serrano, Manuela Serrano Berklee, De camino al Berklee, Berklee college of music, Berklee, Manuela, Manu"
        />
      </Head>

      <Header />

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
