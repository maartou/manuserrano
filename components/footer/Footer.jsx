import Link from "next/link"
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.links}>
            <Link href="/"> Inicio </Link>
            <Link href="#sobre-mi"> Sobre mí </Link>
            <Link href="#videos"> Videos </Link>
            <Link href="#recaudaciones"> Contacto </Link>
        </div>
        <h4>&copy; Manuela Serrano 2022 todos los derechos reservados.</h4>
        <p>Sitio web realizado por  <a href="https://www.martineduardo.com/" target="_blank" rel="noreferrer" >Martín Padrón</a> </p>
    </footer>
  )
}

export default Footer