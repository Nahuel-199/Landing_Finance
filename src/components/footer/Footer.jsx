import React from "react";
import logo from "../../assets/logoHeader2.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
      <img src={logo} alt="logo" className='img_footer'/>
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
            Misión
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
            href="https://www.instagram.com/ceaconsultas/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram instagram"></i>
          </a>

          <a
            href="https://walink.co/ac5ec4"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
         <i class='bx bxl-whatsapp' style={{color: "green"}}></i>
          </a>

          <a
            href="https://www.facebook.com/ceaconsultas"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
           <i class='bx bxl-facebook-circle' style={{color: "#0000ffb0"}}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
