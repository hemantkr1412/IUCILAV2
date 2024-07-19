import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLinks">
        <Link to="/">
        <p className="fl1">Home</p>
        </Link>
        <a href="https://cila.la/" target="_blank">
        <p>CILA</p>
        </a>
        <Link to="/noticias">
        <p>Noticias</p>
        </Link>
      </div>
      <div className="address">
        <p>Avda. Callao Nro. ó7</p>
        <p>2do piso</p>
        <p>Ciudad Autónoma de Buenos Aires</p>
        <div className="socialLinks">
          <Link to="https://www.instagram.com/iucilaok" target="_blank">
            <img src="/assets/insta.webp" />
          </Link>
          <Link to="https://www.facebook.com/iucilaok" target="_blank">
            <img src="/assets/fb.webp" />
          </Link>
        </div>
        <div className="copyright">
          <h5>© 2024 by UGD. All rights reserved</h5>
        </div>
      </div>

      <div className="footerLogo">
        <Link to='/'>
        <img src="/assets/footerLogo.webp" />
        </Link>
        <div className="copyrightM">
          <h5>© 2024 by UGD. All rights reserved</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
