import style from "./About.module.scss";
import manu from "../../public/img/manu_about.jpg";
import Image from "next/image";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import {FaSpotify} from 'react-icons/fa';

const About = () => {
  return (
    <section className={style.about_section}>
      <div className={style.container}>
        <div className={style.foto}>
          <Image src={manu} alt="Manuela Serrano" />
        </div>

        <div className={style.content}>
          <small id="about">Conoce...</small>
          <h2>Mi historia a través de la música</h2>
          <p>
            Soy Músico y Cantautora venezolana, Especialista en Música Moderna y
            Productora Musical en formación. <br /> <br /> Inicié en este mundo
            sólo como un hobby hasta que descubrí que es lo que más amo, desde
            entonces he estudiado estética, historia, armonía, lenguaje musical
            y también música contemporánea como el jazz, blues y pop latino que
            es lo que más amo cantar. <br /> <br /> Fui aceptada en la
            prestigiosa{" "}
            <span>
              {" "}
              <a
                href="https://www.berklee.edu/"
                target="_blank"
                rel="noreferrer"
              >
                Berklee College of Music
              </a>{" "}
            </span>{" "}
            para estudiar un Bachelor of Music para el semestre de Enero 2023 y
            recibí una beca de $27,000 por mi talento y desempeño académico.{" "}
            <br /> <br /> ¡Acompáñame en este camino!
          </p>
          <h4 id="firma">Manuela Serrano.</h4>

          <div className={style.socials}>
            <a
              href="https://www.instagram.com/manuelaserranoc/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram className={style.icon} />
            </a>

            <a
              href="https://www.youtube.com/channel/UCK3zen35O3ZiOsBwqw9EjiQ/videos"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineYoutube className={style.icon} />
            </a>

            <a
              href="https://www.tiktok.com/@manuelaserranoc"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok className={style.icon} />
            </a>

            <a
              href="https://open.spotify.com/artist/74JgOac1eZaSz72Ga28U32"
              target="_blank"
              rel="noreferrer"
            >
              <FaSpotify className={style.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
