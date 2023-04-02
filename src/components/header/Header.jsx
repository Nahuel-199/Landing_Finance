import React from 'react';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import "./header.css"

const Header = () => {

  const {t} = useTranslation();

  return (
    <div id="main">
        <div className="header-heading">
            <h2>{t("Conocimientos")}</h2>
            <h1><span>{t("Experiencia")}</span></h1>
            <h2>{t("Aplicada")}</h2>
            <p className="details">
               {t("Sólidos Conocimientos Técnicos")}
            </p>
            <p className="details">
            {t("Acompañando al cliente en el desarrollo de su actividad, brindando la mejor calidad de servicio")}
            </p>
            <div className="header-btns">
            <Link to="contact" smooth={true} duration={1000}>
              <button className='header-btn'>{t("HACENOS TU CONSULTA")}</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Header