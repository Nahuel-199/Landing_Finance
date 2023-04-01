import React, { useContext } from 'react';
import { ThemeContext } from "../../context";

const Info = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-check-shield about__icon'></i>
            <h3 className="about__title">Compromiso</h3>
            <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="about__subtitle">+5 años</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-hand about__icon' style={{color: "gray"}}></i>
            <h3 className="about__title">Respeto</h3>
            <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="about__subtitle">+ 1000 clientes satisfechos</span>
        </div>

        <div className="about__box">
        <i class='bx bx-lock-alt about__icon' style={{color: "gray"}}></i>
            <h3 className="about__title">Confianza</h3>
            <span style={{color: darkMode && "rgb(34, 34, 34)"}} className="about__subtitle">En línea 24/7</span>
        </div>
    </div>
  )
}

export default Info