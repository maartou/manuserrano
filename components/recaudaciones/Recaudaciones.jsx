import style from "./Recaudaciones.module.scss";
import Image from "next/image";
import manu from "../../public/img/manu_about.jpg";
import { AiOutlineInstagram } from "react-icons/ai";


const Recaudaciones = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        
        <div className={style.gofound_container} id="recauda">
          <h3>Ayúdame a cumplir mi sueño</h3>
          <div className={style.foto}>
            <Image src={manu} alt="Manuela Serrano" />
          </div>
          <a
            href="https://www.gofundme.com/f/5z27ck-camino-a-berklee-college-of-music"
            target="_blank"
            rel="noreferrer"
          >
            Donar
          </a>
          <p>
            Descripción con un poco de texto Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cum expedita nemo voluptate sapiente
            totam harum, suscipit culpa omnis dicta dolor impedit blanditiis
            officiis soluta magnam officia ut in delectus. Similique!
          </p>
        </div>

        <div className={style.contact}>
          <h3>Para contrataciones</h3>
          <div className={style.video}>
            <p>Inserte video preview aquí</p>
          </div>

          <div className={style.permalinks}>
            <a href="#"> Contacto 1 </a>
            <a href="#"> Contacto 2 </a>
            <a href="#"> Contacto 3 </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recaudaciones;
