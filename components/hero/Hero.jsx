import Link from "next/link";
import Image from "next/image";
import style from "./Hero.module.scss";
import manu from "../../public/img/manu_principal.jpg";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className={style.hero}>

        <nav className={style.navigation}>
          <Link href="/"> Inicio </Link>
          <Link href="/"> Sobre mi </Link>
          <Link href="/"> Videos </Link>
          <Link href="/"> Recaudacion </Link>
        </nav>

        <div className={style.container}>

            <div className={style.titles}>
              <h1>
                Cumpliendo <br /> el sueño
              </h1>
              <h2>
                Escucha mi historia a través de la música y acómpañame{" "}
                <span> de camino al Berklee </span>{" "}
              </h2>
              <div className={style.cta}>
                <Link href="/"> Escuchar </Link>
              </div>
            </div>

          <div className={style.foto}>
            <Image src={manu} alt="Manuela Serrano" />
          </div>
        </div>
        
        <div className={style.socials}>
          <a href="#">
            {" "}
            <AiOutlineInstagram className={style.icon} />{" "}
          </a>
          <a href="#">
            {" "}
            <AiOutlineYoutube className={style.icon} />{" "}
          </a>
          <a href="#">
            {" "}
            <FaTiktok className={style.icon} />{" "}
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
