import React, { useState } from "react";
import { Link } from "react-router-dom";
import growthy from "../img/Growthy.png";

import "./Navbar.css";

const Navbar = () => {
  const [open, changeOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="container">
        <div className="Navbar-flex">
          <Link className="Navbar-header" to="/">
            <img
              className="Navbar-logo"
              src={growthy}
              alt="Growthy Investors"
            />
            <h1>Prueba de Growthy Investors</h1>
          </Link>
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
          <Link to="/direccion">Direccion General</Link>
          <Link to="/rrhh">RRHH</Link>
          <Link to="/programadores">Programadores</Link>
          <Link to="/financieros">Financieros</Link>
          <Link to="/analistas">Analistas</Link>
          <Link to="/bolsa">Bolsa de Trabajo</Link>
        </nav>
        {open ? (
          <nav class="burger-options">
            <Link to="/direccion">Direccion General</Link>
            <Link to="/rrhh">RRHH</Link>
            <Link to="/programadores">Programadores</Link>
            <Link to="/financieros">Financieros</Link>
            <Link to="/analistas">Analistas</Link>
            <Link to="/bolsa">Bolsa de Trabajo</Link>
          </nav>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
