import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isInstitutionalPage = location.pathname === "/institucional";
  const isPropuestaPage = location.pathname === "/propuestaAcademica";
  const isComunidadPage = location.pathname === "/comunidadAcademica";
  const [showinstitucionalMenu, setShowinstitucionalMenu] = useState(false);
  const [showpropMenu, setShowpropMenu] = useState(false);
  const [showcomunidadMenu, setShowcomunidadMenu] = useState(false);

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
            onMouseEnter={() => setShowinstitucionalMenu(true)}
            onMouseLeave={() => setShowinstitucionalMenu(false)}
          >
            <Link to="/institucional">
              <p>Institucional</p>
            </Link>
            <div className={`menu ${isInstitutionalPage ? "block" : "none"}`}>
              {showinstitucionalMenu && (
                <div className="sub-menu">
                  <Scroll smooth={true} duration={500} to="desarrollar">
                    <p>Propósito y Actividades</p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="fundadoras">
                    <p>Instituciones Fundadoras </p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="fundacionales">
                    <p>Antecedentes Fundacionales</p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="redAcademica">
                    <p>Red Académica</p>
                  </Scroll>
                </div>
              )}
            </div>
          </div>

          <div
            className="nav-link"
            onMouseEnter={() => setShowcomunidadMenu(true)}
            onMouseLeave={() => setShowcomunidadMenu(false)}
          >
            <Link to="/comunidadAcademica">
              <p>Comunidad Academica</p>
            </Link>
            <div className={`menu ${isComunidadPage ? "block" : "none"}`}>
              {showcomunidadMenu && (
                <div className="sub-menu">
                  <Scroll smooth={true} duration={500} to="directors">
                    <p>Director Ejecutivo</p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="docentes">
                    <p>Nuestros Docentes</p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="estudiantes">
                    <p>Nuestros Estudiantes</p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="formacion">
                    <p>Formacion</p>
                  </Scroll>
                </div>
              )}
            </div>
          </div>

          <div
            className="nav-link"
            onMouseEnter={() => setShowpropMenu(true)}
            onMouseLeave={() => setShowpropMenu(false)}
          >
            <Link to="/propuestaAcademica">
              <p>Propuesta Académica</p>
            </Link>
            <div className={`menu ${isPropuestaPage ? "block" : "none"}`}>
              {showpropMenu && (
                <div className="sub-menu">
                  <Scroll smooth={true} duration={500} to="prop">
                    <p>Propuesta General</p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="c1">
                    <p>Certificación CILA </p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="c2">
                    <p>Diplomatura Universitaria en Tasación de Inmuebles</p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="c3">
                    <p>
                      Diplomatura Universitaria en Negocios y Marketing
                      Inmobiliario
                    </p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="c4">
                    <p>Diplomatura Universitaria en Proyectos Inmobiliarios </p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="c5">
                    <p>
                      Tecnicatura Universitaria en Corretaje y Negocios
                      Inmobiliarios
                    </p>
                  </Scroll>
                  <Scroll smooth={true} duration={500} to="c6">
                    <p>Licenciatura en Corretaje y Negocios Inmobiliarios</p>
                  </Scroll>
                </div>
              )}
            </div>
          </div>

          <Link to="/noticias">
            <p>Noticias</p>
          </Link>

          <div className="nav-search">
            <input type="text" />
            <div className="searchIcon">
              <img src="/assets/search.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={`Rline ${isHomePage ? "sticky" : "absolute"}`} />
    </>
  );
};

export default Navbar;
