import style from "./Counter.module.scss";
import Image from "next/image";
import cphone from "../../public/img/cphone.svg";
import cwide from "../../public/img/cwide.svg";

const Counter = () => {
  return (
    <div className={style.container}>

        <h3>Cada dólar cuenta</h3>

      <div className={style.cphone}>
        <Image src={cphone} alt="" />
      </div>

      
      <div className={style.cwide}>
        <Image src={cwide} alt="" />
      </div>

    </div>
  );
};

export default Counter;
