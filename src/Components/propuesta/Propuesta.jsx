import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "./Propuesta.css";
import RenderContent6 from "./renderContent6";
import RenderContent5 from "./renderContent5";
import RenderContent4 from "./renderContent4";
import RenderContent3 from "./renderContent3";
import RenderContent2 from "./renderContent2";
import PropCarousal from "./propCarousal/propCarousal";
// import Carousal from "../home/carousal/Carousal";

const Propuesta = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const renderContent1 = () => {
    switch (activeButton) {
      case 1:
        return (
          <div className="formbox-text">
            <p>
              Para dar un salto cualitativo a tu carrera de Corredor
              Inmobiliario, incorporando competencias para operar con clientes
              internacionales.
            </p>
            <div className="formbox-text-inner1">
              <div>
                <h5>Certificación a otorgar</h5>
                <p>Corredor Inmobiliario Latinoamericano, CIL (72 horas)</p>
              </div>
              <div>
                <Link
                  to="https://drive.google.com/file/d/1cWv-e6dvnEkRYVAaVzxmISzt4VcOki7U/view?usp=drive_link "
                  target="_blank"
                >
                  <button className="plan">
                    Descargar<br></br> Plan de Estudios
                  </button>
                </Link>
              </div>
            </div>
            <h5>Destinatarios</h5>
            <p>
              Corredores Inmobiliarios de los países con asociaciones miembros
              de CILA en actividad.
            </p>
          </div>
        );
      case 2:
        return (
          <div className="formbox-text">
            <p>La modalidad será híbrida, con distintas instancias:</p>
            <ul>
              <li>
                Etapa virtual: Desde el 5 de agosto hasta el 13 de septiembre,
                dos sesiones semanales de actividad sincrónica de dos horas de
                duración, más actividades en el aula virtual.
              </li>
              <li>
                Etapa presencial (optativa): En Ecuador, en el IV Congreso
                Inmobiliario Latinoamericano, los días 17 y 18 de septiembre.
              </li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="formbox-text">
            <p>La Certificación te brindará:</p>
            <ul>
              <li>
                Internacionalización de conocimientos sobre negocios
                inmobiliarios: Con las particularidades de distintos países y
                regiones, tendencias vigentes, aspectos legales, con lo que
                adquirirás una visión amplia del mercado de bienes raíces a
                nivel global.
              </li>
              <li>
                Vínculos internacionales: Intercambio permanente de
                conocimientos y experiencias, durante clases, debates y
                exposición de casos, con docentes y colegas de diversos países,
                ampliando tu red de nexos en el ámbito inmobiliario global.
              </li>
              <li>
                Experiencias a partir de casos concretos: Reflejan distintas
                situaciones y realidades, nutriendo conocimientos a partir de
                experiencias de colegas de otras regiones.
              </li>
            </ul>
          </div>
        );
      default:
        return <div>Content for Button 1</div>;
    }
  };

  const getButtonStyle = (buttonNumber) => {
    return {
      backgroundColor: activeButton === buttonNumber ? "#681c2c" : "#fff",
      color: activeButton === buttonNumber ? "#fff" : "#b0344c",
    };
  };

  return (
    <div className="propuesta">
      <Element name="prop" className="propuesta">
        <div id="prop" className="propintro">
          <h1>Propuesta General</h1>
          <p>
            Si cursaste una carrera de Corredor Inmobiliario o similar, se te
            reconocerán las materias que hayas aprobado.
          </p>
          <p>
            Siendo idóneo con antigüedad mayor a cinco años en la actividad
            inmobiliaria, siendo reconocidos y matriculados por los colegios
            profesionales, otorgamos materias en base a tus competencias
            laborales.
          </p>
          <p>
            Para obtener este TÍTULO de GRADO UNIVERSITARIO deberás cursar las
            materias que adeuden luego de ser reconocidos los créditos
            académicos obtenidos. Este cursado será totalmente Online con
            materias Cuatrimestrales.
          </p>
          <p>
            Entregándose los Títulos luego de obtenidos durante Los CONGRESOS
            LATINOAMERICANOS.
          </p>
          <p>
            Los Licenciados CILA, como poseedores del máximo Título profesional,
            conformarán una Comunidad Especial de Asesoramiento y desarrollo de
            Negocios Inmobiliarios a nivel Latinoamericano.
          </p>
        </div>
      </Element>
      <div className="propintro2BG">
        <div className="propintro2">
          <div className="pi2p1">
            <div className="pi2p1-box">
              <h3>Diplomatura Universitaria en TASACIÓN DE INMUEBLES</h3>
            </div>
            <div className="pi2p1-box">
              <h3>
                Diplomatura Universitaria en NEGOCIACIÓN Y MARKETING
                INMOBILIARIO
              </h3>
            </div>
            <div className="pi2p1-box">
              <h3>Diplomatura Universitaria en PROYECTOS INMOBILIARIOS</h3>
            </div>
          </div>
          <div className="pi2p2">
            <div className="pi2p2-box">
              <h4>Ciclo de Tecnicatura</h4>
              <p>Técnico Universitario en Corretaje y Negocios Inmobiliarios</p>
            </div>
            <div className="pi2p2-box">
              <img src="/assets/propconnector.png" />
            </div>
            <div className="pi2p2-box">
              <h4>Ciclo de Licenciatura</h4>
              <p>Licenciado en Corretaje y Negocios Inmobiliarios</p>
            </div>
          </div>
        </div>
      </div>

      <div className="propformsBG">
        <Element name="c1" className="propForms">
          <div id="c1" className="propForms">
            <div className="formbox">
              <h1>Certificación CILA</h1>
              <h2>Corredor Inmobiliario Latinoamericano (CIL)</h2>

              <div className="formbox-content">
                <div className="formbox-page">
                  <div className="formbox-nav">
                    <button
                      style={getButtonStyle(1)}
                      onClick={() => handleButtonClick(1)}
                    >
                      Presentación
                    </button>
                    <div className="bline" />
                    <button
                      style={getButtonStyle(2)}
                      onClick={() => handleButtonClick(2)}
                    >
                      Carga horaria
                    </button>
                    <div className="bline" />
                    <button
                      style={getButtonStyle(3)}
                      onClick={() => handleButtonClick(3)}
                    >
                      Alcances
                    </button>
                  </div>
                  {renderContent1()}
                </div>

                <div className="form">
                  <iframe
                    width={350}
                    height={300}
                    style={{ border: "none" }}
                    src="https://inscripciones.ugd.edu.ar/simplified_contact_cases/new"
                  />
                </div>
              </div>
            </div>
          </div>
        </Element>
        <RenderContent2 />
        <RenderContent3 />
        <RenderContent4 />
        <RenderContent5 />
        <RenderContent6 />
      </div>

      <PropCarousal/>
    </div>
  );
};

export default Propuesta;
