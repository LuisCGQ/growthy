import React from "react";
import fondo from "../img/fondo2.jpg";
import "./Pagina.css";

const Pagina = ({ nombre, descripcion, imagen, enlace }) => {
  return (
    <div
      className="Pagina"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <div className="Pagina-back">
        <div className="container">
          <div className="imagen">
            <img src={imagen} alt={nombre} />
          </div>
          <h2>{nombre}</h2>

          <p>{descripcion}</p>
          {enlace ? <a href={enlace}>Ver Bolsa</a> : null}
        </div>
      </div>
    </div>
  );
};

export default Pagina;
