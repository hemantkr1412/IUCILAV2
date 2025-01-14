import React from "react";
import { Link } from "react-router-dom";
import "./Notice.css";

const Notice = () => {
  return (
    <div className="notice">
      <h2>Últimas noticias</h2>
      <div className="noticeContainer">
      <Link target="_blank" to="https://www.primeraedicion.com.ar/nota/100903469/el-instituto-universitario-de-corretaje-inmobiliario-latinoamericano-presento-la-certificacion-cila/" style={{background:"#fff", borderRadius:"10px"}}>
          <div className="noticeBox">
            <img src="/assets/newNotice.jpg" style={{
              height:"240px"
            }}/>
            <div className="notice-text">
              <h5>24 julio 2024</h5>
              <h4>
              El Instituto Universitario de Corretaje Inmobiliario Latinoamericano presentó la Certificación CILA
              </h4>
              <p>
              Se trata de una validación de carácter global que surge de la articulación entre la Universidad Gastón Dachary (UGD) y la Confederación Inmobiliaria Latinoamericana (CILA).
              </p>
            </div>
          </div>
        </Link>
        <Link target="_blank" to="https://www.primeraedicion.com.ar/nota/100755715/ugd-se-afianza-como-referencia-academica-del-rubro-inmobiliario-en-latinoamerica/">
          <div className="noticeBox">
            <img src="/assets/notice1.webp" />
            <div className="notice-text">
              <h5>18 noviembre 2023</h5>
              <h4>
                UGD se afianza como referencia académica del rubro inmobiliario
                en Latinoamérica
              </h4>
              <p>
                UGD consolida su posición como referente latinoamericano en la
                formación inmobiliaria al firmar un convenio durante el CILA
                Panamá 2023 para establecer el Instituto Universitario de
                Corretaje Inmobiliario Latinoamericano, liderado por Javier
                Grandinetti
              </p>
            </div>
          </div>
        </Link>
        <Link target="_blank" to="https://economis.com.ar/comenzo-la-licenciatura-en-corretaje-y-negocios-inmobiliarios/" style={{background:"#fff", borderRadius:"10px"}}>
          <div className="noticeBox">
            <img src="/assets/notice2.webp" />
            <div className="notice-text">
              <h5>05 abril 2023</h5>
              <h4>
                Comenzó la Licenciatura en Corretaje y Negocios Inmobiliarios
              </h4>
              <p>
                UGD lanza formación online en su plataforma UGD Plus, dirigida
                por Javier Grandinetti y respaldada por entidades inmobiliarias
                destacadas. La nueva licenciatura en corretaje inmobiliario
                permite amplias funciones en el sector.
              </p>
            </div>
          </div>
        </Link>
        {/* <Link target="_blank" to="https://economis.com.ar/la-ugd-y-autoridades-del-sector-inmobiliario-abordaron-el-blanqueo-para-la-compra-de-propiedades-en-caba/">
          <div className="noticeBox">
            <img src="/assets/notice3.webp" />
            <div className="notice-text">
              <h5>10 febrero 2023</h5>
              <h4>
                La UGD y autoridades del sector inmobiliario abordaron el
                blanqueo para la compra de propiedades en CABA
              </h4>
              <p>
                Importantes instituciones inmobiliarias y académicas se unen
                para ofrecer capacitación sobre blanqueos inmobiliarios en la
                UGD. Destacados profesionales abordan nuevas oportunidades y la
                UGD anuncia programas especializados.
              </p>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Notice;
