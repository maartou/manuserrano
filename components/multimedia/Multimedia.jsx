import style from "./Multimedia.module.scss";

const Multimedia = () => {
  return (
    <section className={style.section}>
      <h2 id="videos">Videos recientes</h2>

      <div className={style.container}>
        <article className={style.item}>
          <iframe
            className={style.video}
            src="https://www.youtube.com/embed/i_JtsUM9Oyg"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3>La vida que quiero vivir</h3>
        </article>

        <article className={style.item}>
          <iframe
            className={style.video}
            src="https://www.youtube.com/embed/dVzQEW6ZxfI"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3>De camino a Berklee</h3>
        </article>

        <article className={style.item}>
          <iframe
            className={style.video}
            src="https://www.youtube.com/embed/YQlpzhRIYUA"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3>La cita Ft. Jorge Luis Chacín</h3>
        </article>
      </div>
    </section>
  );
};

export default Multimedia;
