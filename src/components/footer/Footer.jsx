import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">ESTUDIOCEA</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
             Inicio
            </a>
          </li>

          <li>
            <a href="#Portfolio" className="footer__link">
            Servicios
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Nosotros
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
            Clientes & Misión
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Contacto
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="#Instagram"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="#Whatsapp"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
         <i class='bx bxl-whatsapp'></i>
          </a>

          <a
            href="#facebook"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
           <i class='bx bxl-facebook-circle'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
