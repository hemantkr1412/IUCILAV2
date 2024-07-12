import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLinks">
        <p className="fl1">Home</p>
        <p>CILA</p>
        <p>Noticias</p>
      </div>
      <div className="address">
        <p>Avda. Callao Nro. 67</p>
        <p>2do piso</p>
        <p>Cludad Autonoma de Buenos Aires</p>
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
        <Link to=' https://cila.la/' target="_blank">
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
