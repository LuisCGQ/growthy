import React from "react";
import "./Contacto.css";
import fondo from "../img/fondo2.jpg";

const Contacto = () => {
  return (
    <div
      className="Contacto"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <div className="Contacto-back">
        <div className="Contacto-flex container">
          <div className="donde">
            <h2>¿Donde encontrarnos?</h2>
            <p>
              <a href="https://growthyinvestors.com/">growthyinvestors.com</a>
            </p>
          </div>
          <div className="contactanos">
            <h2>Contáctanos</h2>
            <p>
              <a href="https://growthyinvestors.com/contact">Contacto</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
