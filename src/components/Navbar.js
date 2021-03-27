import React from "react";
import growthy from "../img/Growthy.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="container">
        <a className="Navbar-header" href="/">
          <img className="Navbar-logo" src={growthy} alt="Growthy Investors" />
          <h1>Prueba de Growthy Investors</h1>
        </a>
        <div class="Navbar-options">
          <a href="/">Direccion General</a>
          <a href="/">RRHH</a>
          <a href="/">Programadores</a>
          <a href="/">Financieros</a>
          <a href="/">Analistas</a>
          <a href="/">Bolsa de Trabajo</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
