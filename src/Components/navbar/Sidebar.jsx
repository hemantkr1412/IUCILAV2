import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Link as Scroll} from "react-scroll"
import "./Navbar.css";

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setMenuOpen(false); // Close the menu if the dropdown is already open
    }
    setDropdownOpen(!isDropdownOpen);
  };


  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      setDropdownOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <div className="menu">
      <div className="menuIcon" onClick={toggleMenu}>
        <img src="/assets/menu.webp" />
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
          <Link to="/institucional" onClick={toggleDropdown}>
            <p>Institucional</p>
          </Link>
          {isDropdownOpen && (
            <div className="sub-menu">
              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="desarrollar">
                <p>Propósito y Actividades</p>
              </Scroll>
              <div className="whiteLine" />
              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="fundadoras">
                <p>Instituciones fundadoras</p>
              </Scroll>
              <div className="whiteLine" />

              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="fundacionales">
                <p>Antecedentes fundacionales</p>
              </Scroll>
              <div className="whiteLine" />
              <Scroll smooth={true} duration={500} onClick={toggleMenu} to="redAcademica">
                <p>Red Académica</p>
              </Scroll>
              <div className="whiteLine" />
              <br></br>
            </div>
          )}
          <div className="mRedLine" />
          <Link to="/comunidadAcademica" onClick={toggleMenu}>
            <p>Comunidad Academica</p>
          </Link>
          <div className="mRedLine" />
          <p>Propuesta Académica</p>
          <div className="mRedLine" />
          <p>Noticias</p>
          <div className="mRedLine" />
          <p>Buscador</p>
          <div className="mRedLine" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
