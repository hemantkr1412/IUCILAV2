import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [showinstitucionalMenu, setShowinstitucionalMenu] = useState(false);
  const [showpropMenu, setShowpropMenu] = useState(false);
  const [showcomunidadMenu, setShowcomunidadMenu] = useState(false);
  const [zIndex, setZIndex] = useState(isHomePage ? -3 : 1);

  const handleScrollToSection = (to, element) => {
    navigate(to);
    setTimeout(() => {
      const section = document.getElementById(element);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block:"start" });
      }
    }, 500);
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block:"start" });
      }
    }
  }, [location]);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setZIndex(-4);
      } else {
        setZIndex(-3);
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <>
      <div className={`navbar ${isHomePage ? "sticky" : "relative"}`} style={{zIndex:zIndex}}>
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
            {showinstitucionalMenu && (
              <div className="sub-menu">
                <p onClick={() => handleScrollToSection("/institucional", "desarrollar")}>
                  Propósito y Actividades
                </p>
                <p onClick={() => handleScrollToSection("/institucional", "fundadoras")}>
                  Instituciones Fundadoras
                </p>
                <p onClick={() => handleScrollToSection("/institucional", "fundacionales")}>
                  Antecedentes Fundacionales
                </p>
                <p onClick={() => handleScrollToSection("/institucional", "redAcademica")}>
                  Red Académica
                </p>
              </div>
            )}
          </div>

          <div
            className="nav-link"
            onMouseEnter={() => setShowcomunidadMenu(true)}
            onMouseLeave={() => setShowcomunidadMenu(false)}
          >
            <Link to="/comunidadAcademica">
              <p>Comunidad Académica</p>
            </Link>
            {showcomunidadMenu && (
              <div className="sub-menu">
                <p onClick={() => handleScrollToSection("/comunidadAcademica", "directors")}>
                  Director Ejecutivo
                </p>
                <p onClick={() => handleScrollToSection("/comunidadAcademica", "docentes")}>
                  Nuestros Docentes
                </p>
                <p onClick={() => handleScrollToSection("/comunidadAcademica", "estudiantes")}>
                  Nuestros Estudiantes
                </p>
                <p onClick={() => handleScrollToSection("/comunidadAcademica", "formacion")}>
                  Formacion
                </p>
              </div>
            )}
          </div>

          <div
            className="nav-link"
            onMouseEnter={() => setShowpropMenu(true)}
            onMouseLeave={() => setShowpropMenu(false)}
          >
            <Link to="/propuestaAcademica">
              <p>Propuesta Académica</p>
            </Link>
            {showpropMenu && (
              <div className="sub-menu">
                <p onClick={() => handleScrollToSection("/propuestaAcademica", "prop")}>
                  Propuesta General
                </p>
                <p onClick={() => handleScrollToSection("/propuestaAcademica", "c1")}>
                  Certificación CILA
                </p>
                <p onClick={() => handleScrollToSection("/propuestaAcademica", "c2")}>
                  Diplomatura Universitaria en Tasación de Inmuebles
                </p>
                <p onClick={() => handleScrollToSection("/propuestaAcademica", "c3")}>
                  Diplomatura Universitaria en Negocios y Marketing Inmobiliario
                </p>
                <p onClick={() => handleScrollToSection("/propuestaAcademica", "c4")}>
                  Diplomatura Universitaria en Proyectos Inmobiliarios
                </p>
                <p onClick={() => handleScrollToSection("/propuestaAcademica", "c5")}>
                  Tecnicatura Universitaria en Corretaje y Negocios Inmobiliarios
                </p>
                <p onClick={() => handleScrollToSection("/propuestaAcademica", "c6")}>
                  Licenciatura en Corretaje y Negocios Inmobiliarios
                </p>
              </div>
            )}
          </div>

          <Link to="/noticias">
            <p>Noticias</p>
          </Link>

          <div className="nav-search">
            <input type="text" />
            <div className="searchIcon">
              <img src="/assets/search.png" alt="Search Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className={`Rline ${isHomePage ? "sticky" : "absolute"}`} />
    </>
  );
};

export default Navbar;
