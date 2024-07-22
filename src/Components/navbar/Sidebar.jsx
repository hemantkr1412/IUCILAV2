import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import "./Navbar.css";

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isInstitucionalDrop, setInstitucionalDrop] = useState(false);
  const [isPropuestaDrop, setPropuestaDrop] = useState(false);
  const [isComunidadDrop, setComunidadDrop] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleInstitucional = () => {
    if (isInstitucionalDrop) {
      setMenuOpen(false);
    }
    setInstitucionalDrop(!isInstitucionalDrop);
    setPropuestaDrop(false);
    setComunidadDrop(false);
  };

  const togglePropuesta = () => {
    if (isPropuestaDrop) {
      setMenuOpen(false);
    }
    setPropuestaDrop(!isPropuestaDrop);
    setInstitucionalDrop(false);
    setComunidadDrop(false);
  };

  const toggleComunidad = () => {
    if (isComunidadDrop) {
      setMenuOpen(false);
    }
    setComunidadDrop(!isComunidadDrop);
    setInstitucionalDrop(false);
    setPropuestaDrop(false);
  };

  useEffect(() => {
    if ((isMenuOpen, isSearchOpen)) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      setInstitucionalDrop(false);
      setPropuestaDrop(false);
      setComunidadDrop(false);
    }
  }, [isMenuOpen, isSearchOpen]);

  return (
    <div className="menu">
      <div className="menuIcon" onClick={toggleMenu}>
        <img src="/assets/menu.png" />
      </div>
      <div className="searchMIcon" onClick={toggleSearch}>
        <img src="/assets/searchM.png" />
      </div>

      <div className={`side-search ${isSearchOpen ? "open" : ""}`}>
        <div className="menuLogo">
          <img
            onClick={toggleSearch}
            className="leftArrow"
            src="/assets/leftArrow.webp"
          />
          <Link to="/" onClick={toggleSearch}>
            <img className="Mlogo" src="/assets/Mlogo.webp" />
          </Link>
        </div>
        <div className="nav-search">
          <div className="searchIcon">
            <img src="/assets/searchM.png" />
          </div>
          <input placeholder="search..." type="text" />
        </div>
      </div>

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menuLogo">
          <img
            onClick={toggleMenu}
            className="leftArrow"
            src="/assets/leftArrow.webp"
          />
          <Link to="/" onClick={toggleMenu}>
            <img className="Mlogo" src="/assets/Mlogo.webp" />
          </Link>
        </div>
        <div className="menuList">
          <Link to="/institucional" onClick={toggleInstitucional}>
            <p>Institucional</p>
          </Link>
          {isInstitucionalDrop && (
            <div className="sub-menu">
              <Scroll
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                to="desarrollar"
              >
                <p>Propósito y Actividades</p>
              </Scroll>
              <div className="whiteLine" />
              <Scroll
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                to="fundadoras"
              >
                <p>Instituciones fundadoras</p>
              </Scroll>
              <div className="whiteLine" />

              <Scroll
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                to="fundacionales"
              >
                <p>Antecedentes fundacionales</p>
              </Scroll>
              <div className="whiteLine" />
              <Scroll
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                to="redAcademica"
              >
                <p>Red Académica</p>
              </Scroll>
              <div className="whiteLine" />
              <br></br>
            </div>
          )}
          <div className="mRedLine" />
          <Link to="/comunidadAcademica" onClick={toggleComunidad}>
            <p>Comunidad Académica</p>
          </Link>
          {isComunidadDrop && (
            <div className="sub-menu">
              <Scroll
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                to="directors"
              >
                <p>Autoridades</p>
              </Scroll>
              <div className="whiteLine" />
              <Scroll
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                to="docentes"
              >
                <p>Nuestros Docentes</p>
              </Scroll>
              <div className="whiteLine" />

              <Scroll
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                to="estudiantes"
              >
                <p>Nuestros Estudiantes</p>
              </Scroll>
              <div className="whiteLine" />
              <Scroll
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                to="formacion"
              >
                <p>Formacion</p>
              </Scroll>
              <div className="whiteLine" />
              <br></br>
            </div>
          )}
          <div className="mRedLine" />
          <Link to="/propuestaAcademica" onClick={togglePropuesta}>
            <p>Propuesta Académica</p>
          </Link>
          {isPropuestaDrop && (
            <div className="sub-menu">
              <Scroll
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                to="prop"
              >
                <p>Propuesta General</p>
              </Scroll>
              <div className="whiteLine" />
              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="c1">
                <p>Certificación CILA</p>
              </Scroll>
              <div className="whiteLine" />

              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="c2">
                <p>Diplomatura Universitaria en Tasación de Inmuebles</p>
              </Scroll>
              <div className="whiteLine" />

              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="c3">
                <p>
                  Diplomatura Universitaria en Negocios y Marketing Inmobiliario
                </p>
              </Scroll>
              <div className="whiteLine" />

              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="c4">
                <p>Diplomatura Universitaria en Proyectos Inmobiliarios</p>
              </Scroll>
              <div className="whiteLine" />

              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="c5">
                <p>
                  Tecnicatura Universitaria en Corretaje y Negocios
                  Inmobiliarios
                </p>
              </Scroll>
              <div className="whiteLine" />
              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="c6">
                <p>Licenciatura en Corretaje y Negocios Inmobiliarios</p>
              </Scroll>
              <div className="whiteLine" />
              <br></br>
            </div>
          )}
          <div className="mRedLine" />
          <Link to="/noticias" onClick={toggleMenu}>
          <p>Noticias</p>
          </Link>
          <div className="mRedLine" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
