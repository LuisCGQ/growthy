import React from "react";
import fondo from "../img/fondo1.jpg";

import "./Somos.css";

const Somos = () => {
  return (
    <div
      className="Somos"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <div className="Somos-back">
        <div className="container">
          <h1>Growthy Investors</h1>
          <p>Una empresa dediada a remarcar el potencial del mercado digital</p>
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos una empresa dedicada a hacer crecer la suya de manera
            exponecial en el mercado en el que desee colocarse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Somos;
