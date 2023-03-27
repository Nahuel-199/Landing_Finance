import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import mq from "../../assets/logoFinance2.png";
import "./about.css";
import Info from "./Info";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="about section" id="about">
      <h2 style={{ color: darkMode && "#fff" }} className="section__title">
        La celeridad en las respuestas y la presencia en la empresa, hacen
        nuestra diferencia.
      </h2>
      <span className="section__subtitle">
        Creemos que la atención permanente de Socios es un elemento diferencial
        que nos permite sentirnos parte integrante del equipo de trabajo de
        nuestros clientes.
      </span>
      <div className="about__container container grid">
        <img src={mq} alt="about" className="img_finance2"/>
        <div className="about__data">
          <Info />
          <p className="about__description">
            Ofrecemos a nuestros clientes una amplia gama de servicios
            financieros para ayudarlos a alcanzar sus objetivos. Estamos
            comprometidos a proporcionar asesoramiento de calidad, ofreciendo
            soluciones integradas para nuestros clientes. Nuestros servicios
            incluyen asesoramiento financiero, planificación financiera,
            análisis de inversiones, evaluación de riesgos, y estrategias de
            inversión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
