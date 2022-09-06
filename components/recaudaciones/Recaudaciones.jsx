import style from "./Recaudaciones.module.scss";
import Image from "next/image";
import manu from "../../public/img/manu_cantando.jpg";
import brillo from "../../public/img/brillos.svg";
import { AiOutlineInstagram } from "react-icons/ai";

const Recaudaciones = () => {
  return (
    <section className={style.section}>
      <div className={style.brillo1}>
        <Image src={brillo} alt="" />
      </div>

      <div className={style.container}>
        <div className={style.gofound_container} id="recaudaciones">
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
            Solo los grandes músicos estudian en Berklee College of Music, y
            como muestra de ello afortunadamente fui becada con más del 50%
            ($27.000) del valor de la matrícula, pero aún me falta el resto.
            Puedes apoyarme en este camino haciendo una donación a través de mi
            GoFund Me. <br /> <br /> ¡Cada dólar cuenta!
          </p>
        </div>

        <div className={style.contact}>
          <h3>Para contrataciones</h3>
          <div className={style.video}>
            <p>Inserte video preview aquí</p>
          </div>

          <div className={style.permalinks}>
            <a href="mailto: manuelaserranoc@gmail.com"> Envíame un Email</a>
            <a
              href="https://www.instagram.com/manuelaserranoc/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Comunícate a través de mis redes sociales
            </a>
          </div>
        </div>
      </div>

      <div className={style.brillo2}>
        <Image src={brillo} alt="" />
      </div>
    </section>
  );
};

export default Recaudaciones;
