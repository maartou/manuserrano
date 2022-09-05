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
      <section className={style.section}>
        <div className={style.container}>

          <nav className={style.nav}>
            <Link href="#about"> Sobre mi </Link>
            <Link href="#videos"> Videos </Link>
            <Link href="#recauda"> Recaudaciones </Link>
          </nav>

          <div className={style.content}>
            <h1>Cumpliendo el sueño</h1>
            <h2>
              Escucha mi historia a través de la música y acómpañame{" "}
              <span>de camino al Berklee</span>
            </h2>
            <Link href="#videos">Escuchar</Link>
          </div>

          <div className={style.foto}>
            <Image src={manu} alt="Manuela Serrano" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
