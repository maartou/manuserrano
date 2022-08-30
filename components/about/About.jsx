import style from "./About.module.scss";
import manu from "../../public/img/manu_about.jpg";
import Image from "next/image";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const About = () => {
  return (
    <section className={style.about_section}>
      <div className={style.container}>
        <div className={style.foto}>
          <Image src={manu} alt="Manuela Serrano" />
        </div>

        <div className={style.content}>
          <small>Cónoceme un poco más...</small>
          <h2>El camino del sonido</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            aliquam eveniet totam debitis atque, officia deleniti error culpa
            explicabo reiciendis.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            laboriosam dignissimos molestiae nostrum, beatae voluptates totam
            consequuntur obcaecati quo sapiente id vel tempora distinctio ut.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            temporibus eos ratione deserunt illo dolor.
          </p>
          <h4>Firma</h4>
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
        </div>
      </div>
    </section>
  );
};

export default About;
