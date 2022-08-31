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
          <small id="about">Cónoceme un poco más...</small>
          <h2>El camino del sonido</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, velit ipsum sunt cum deserunt repellat provident optio blanditiis sit ratione aperiam? Unde, similique ea! Deleniti vel pariatur animi quam excepturi distinctio a. Saepe libero distinctio blanditiis perspiciatis quos quidem eaque iure. <br/> <br/> Voluptate saepe nulla quia, cupiditate, tenetur excepturi cumque libero aspernatur aperiam officiis voluptas error corrupti, est quae inventore impedit magnam sint sequi quo qui doloremque dolore atque eos! Cumque ratione incidunt amet magni nulla numquam fugit, sed corrupti. Rem.
          </p>
          <h4>Manuela Serrano</h4>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
