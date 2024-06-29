import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import {Link as Scroll} from "react-scroll"

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isInstitutionalPage = location.pathname === "/institucional";
  const [showSubMenu, setShowSubMenu] = useState(false);


  return (
    <>
      <div className={`navbar ${isHomePage ? "sticky" : "relative"}`}>
        <div className="nav-logo">
          <Link to="/">
            <img src="/assets/logo.webp" alt="Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <div 
            className="nav-link"
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            <Link to="/institucional">
              <p>Institucional</p>
            </Link>
            <div className={`menu ${isInstitutionalPage ? "block" : "none"}`}>
            {showSubMenu && (
              <div className="sub-menu">
                <Scroll smooth={true} duration={500} to="desarrollar">
                  <p>Propósito y Actividades</p>
                </Scroll>
                <Scroll smooth={true} duration={500} to="fundadoras">
                  <p>Instituciones fundadoras </p>
                </Scroll>
                <Scroll smooth={true} duration={500} to="fundacionales">
                  <p>Antecedentes fundacionales</p>
                </Scroll>
                <Scroll smooth={true} duration={500} to="redAcademica">
                  <p>Red Académica</p>
                </Scroll>
              </div>
            )}
            </div>
          </div>
          <Link to="/comunidadAcademica">
            <p>Comunidad academica</p>
          </Link>
          <p>Propuesta académica</p>
          <p>Noticias</p>
          <p>Buscador</p>
        </div>
      </div>
      <div className={`Rline ${isHomePage ? "sticky" : "absolute"}`} />
    </>
  );
};

export default Navbar;
