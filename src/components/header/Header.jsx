import React from 'react';
import { Link } from "react-scroll";
import "./header.css"

const Header = () => {
  return (
    <div id="main">
        <div className="header-heading">
            <h2>SERIEDAD</h2>
            <h1><span>EXPERIENCIA</span></h1>
            <p className="details">
               SÓLIDOS CONOCIMIENTOS TÉCNICOS
            </p>
            <p className="details">
            Acompañando al cliente en el desarrollo de su actividad, brindando la mejor calidad de servicio
            </p>
            <div className="header-btns">
            <Link to="contact" smooth={true} duration={1000}>
              <button className='header-btn'>HACENOS TU CONSULTA</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Header