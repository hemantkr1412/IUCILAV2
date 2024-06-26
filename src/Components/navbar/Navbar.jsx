import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <div className={`navbar ${isHomePage ? "sticky" : "relative"}`}>
        <div className="nav-logo">
          <Link to="/">
            <img src="/assets/logo.webp" />
          </Link>
        </div>
        <div className="nav-links">
          <p>Institucional</p>
          <Link to="/comunidadAcademica">
            <p>Comunidad academica</p>
          </Link>

          <p>Propuesta académica</p>

          <p>Noticias</p>
          <p>Buscador</p>
        </div>
      </div>
      <div className={`Rline ${isHomePage ? "fixed" : "absolute"}`} />
    </>
  );
};

export default Navbar;
