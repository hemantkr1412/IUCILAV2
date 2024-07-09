import React from "react";
import { Link } from "react-router-dom";
import "./Noticias.css";

const Noticias = () => {
  return (
    <div className="notice1">
      <h2>Últimas noticias</h2>
      <div className="noticeContainer1">
        <Link
          target="_blank"
          to="https://www.primeraedicion.com.ar/nota/100755715/ugd-se-afianza-como-referencia-academica-del-rubro-inmobiliario-en-latinoamerica/"
        >
          <div className="noticeBox1">
            <div className="notice-img">
              <img src="/assets/notice1.webp" />
            </div>
            <div className="notice-text1">
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
        <Link
          target="_blank"
          to="https://economis.com.ar/comenzo-la-licenciatura-en-corretaje-y-negocios-inmobiliarios/"
          //   style={{ background: "#fff", borderRadius: "10px" }}
        >
          <div className="noticeBox1">
            <div className="notice-img">
              <img src="/assets/notice2.png" />
            </div>
            <div className="notice-text1">
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
        <Link
          target="_blank"
          to="https://economis.com.ar/la-ugd-y-autoridades-del-sector-inmobiliario-abordaron-el-blanqueo-para-la-compra-de-propiedades-en-caba/"
        >
          <div className="noticeBox1">
            <div className="notice-img">
              <img src="/assets/notice3.webp" />
            </div>
            <div className="notice-text1">
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
        </Link>

        <Link
          target="_blank"
          to="https://economis.com.ar/la-ugd-y-autoridades-del-sector-inmobiliario-abordaron-el-blanqueo-para-la-compra-de-propiedades-en-caba/"
        >
          <div className="noticeBox1">
            <div className="notice-img">
              <img src="/assets/notice4.webp" />
            </div>
            <div className="notice-text1">
              <h5>12 diciembre 2022</h5>
              <h4>La Licenciatura camino a la excelencia</h4>
              <p>
                La Federación Inmobiliaria de la República Argentina (FIRA), el
                Instituto de Capacitación Inmobiliaria (ICI) y la Cámara
                Inmobiliaria Argentina (CIA) suscribieron un acuerdo con la
                Universidad Gastón Dachary.
              </p>
            </div>
          </div>
        </Link>

        <Link
          target="_blank"
          to="https://ugd.edu.ar/es/noticias/1926-el-universo-del-corretaje-inmobiliario-hoy-exige-la-profesionalizacion"
        >
          <div className="noticeBox1">
            <div className="notice-img">
              <img src="/assets/notice5.jpg" />
            </div>
            <div className="notice-text1">
              <h5>16 noviembre 2022</h5>
              <h4>
                El universo del Corretaje Inmobiliario hoy exige la
                profesionalización
              </h4>
              <p>
                La UGD presentó la Licenciatura en Corretaje y Negocios
                Inmobiliarios, propuesta acompañada por cuatro Diplomaturas
                Universitarias del mismo rubro. Al ser virtual, está destinada a
                aspirantes de todo el país.
              </p>
            </div>
          </div>
        </Link>
        <Link
          target="_blank"
          to="https://misionesonline.net/2022/11/12/la-universidad-gaston-dachary/?fbclid=IwZXh0bgNhZW0CMTEAAR3wXmTTQOyoeOPcHPE9UoaNZ1MpxqUjH_2cTDT_5pjcFkPHMw7jvXP6ess_aem_ASVhwip9m6LVheUrQFf7b2EQh7RKZNNN4H08ZJ7O8swDtvzvK0VgAfI0kthTcQB-LbEdSaW0msBU1mywLAC4xLd6"
        >
          <div className="noticeBox1">
            <div className="notice-img">
              <img src="/assets/notice6.webp" />
            </div>
            <div className="notice-text1">
              <h5>12 noviembre 2022</h5>
              <h4>
                La Universidad Gastón Dachary presentó la Licenciatura en
                Corretaje y Negocios Inmobiliarios
              </h4>
              <p>
                La presentación oficial de la carrera de la Universidad Gastón
                Dachary se realizó este viernes, y allí estuvieron presentes las
                autoridades de la institución educativa y del Colegio de
                Corredores Públicos Inmobiliarios de Misiones.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Noticias;
