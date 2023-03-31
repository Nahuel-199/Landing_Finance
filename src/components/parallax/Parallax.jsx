import React from "react";
import "./parallax.css";

const Parallax = () => {
  return (
    <div id="parallax">
      <section className="parallax-corte page-section">
        <div className="container text-center py-5">
          <h3 className="text-white titulos-seccion mt-3">
            <b>NUESTROS VALORES!</b>
          </h3>
          <button className="button2">
            Compromiso con el cliente, Respeto, Confianza
          </button>
          <p className="text_parallax">
            Estos tres valores implican una relación con el cliente que apuntan
            a desarrollar un trabajo en equipo cumpliendo cada uno su rol, para
            logar resultados de manera conjunta y apuntando a la satisfacción
            del cliente, donde toma también importancia la comunicación entre
            ambos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Parallax;
