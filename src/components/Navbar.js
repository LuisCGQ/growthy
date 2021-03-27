import React, { useState } from "react";
import growthy from "../img/Growthy.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Navbar.css";

const Navbar = () => {
  const [open, changeOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="container">
        <div className="Navbar-flex">
          <a className="Navbar-header" href="/">
            <img
              className="Navbar-logo"
              src={growthy}
              alt="Growthy Investors"
            />
            <h1>Prueba de Growthy Investors</h1>
          </a>
          <nav
            className={open ? "burger-menu open" : "burger-menu close"}
            onClick={() => changeOpen(!open)}
          >
            <i></i>
            <i></i>
            <i></i>
          </nav>
        </div>
        <nav class="Navbar-options">
          <a href="/">Direccion General</a>
          <a href="/">RRHH</a>
          <a href="/">Programadores</a>
          <a href="/">Financieros</a>
          <a href="/">Analistas</a>
          <a href="/">Bolsa de Trabajo</a>
        </nav>
        {open ? (
          <nav class="burger-options">
            <a href="/">Direccion General</a>
            <a href="/">RRHH</a>
            <a href="/">Programadores</a>
            <a href="/">Financieros</a>
            <a href="/">Analistas</a>
            <a href="/">Bolsa de Trabajo</a>
          </nav>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
