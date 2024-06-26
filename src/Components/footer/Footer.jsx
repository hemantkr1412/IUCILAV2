import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLinks">
        <p className="fl1">Home</p>
        <p>CILA</p>
        <p>Noticias</p>
      </div>
      <div className="address">
        <p>Avda,Callao Nro.67</p>
        <p>2do piso A</p>
        <p>Cludad Autonoma de Buenos Aires</p>
        <div className="socialLinks">
          <img src="/assets/insta.webp" />
          <img src="/assets/fb.webp" />
        </div>
        <div className="copyright">
          <h5>© 2024 by UGD. All rights reserved</h5>
        </div>
      </div>

      <div className="footerLogo">
        <img src="/assets/footerLogo.webp" />
        <div className="copyrightM">
          <h5>© 2024 by UGD. All rights reserved</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
