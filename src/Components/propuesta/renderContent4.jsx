import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "./Propuesta.css";

const RenderContent4 = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 1:
        return (
          <div className="formbox-text">
            <p>
              El diplomado estará capacitado para participar en la
              planificación, organización, formulación de proyectos de inversión
              y negocios inmobiliarios, promoviendo valor.
            </p>
            <p>
              Formación de corta duración, concreta y aplicable: que se puede
              complementar luego completando una formación de grado para
              profundizar tu profesionalización. Trayectos de formación
              flexible: podrás tomar tramos independientes, y adaptar la
              duración y dedicación a tu disponibilidad horaria.
            </p>
            <div className="formbox-text-inner">
              <div className="fti1">
                <div className="fti1-text">
                  <div>
                    <img src="/assets/form1.png" />
                  </div>
                  <div>
                    <h5>Títulos Finales:</h5>
                    <ul>
                      <li>
                        Diplomatura Universitaria en Proyectos Inmobiliarios (8
                        meses)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="fti1-text">
                  <div>
                    <img src="/assets/form3.png" />
                  </div>
                  <div>
                    <h5>Título aprobados por:</h5>
                    <ul>
                      <li>Resolución Ministerio de Educación Nro. 2349/22.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="fti2">
                <Link
                  to="https://drive.google.com/file/d/1jZlrUh4AyEqVwZF0tMKFw8dXJhVe1_nG/view?usp=drive_link "
                  target="_blank"
                >
                  <button className="plan">
                    Descargar<br></br>
                    Plan de Estudios
                  </button>
                </Link>
                {/* <button className="plan">Equivalencias</button> */}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="formbox-text">
            <p>
              Quienes se desempeñen en el ámbito inmobiliario, y aspiren a
              mejorar su formación, adquiriendo nuevas capacidades específicas.
            </p>
            <p>
              Toda persona que desee formarse para desempeñarse en el mercado
              inmobiliario.
            </p>
          </div>
        );
      case 3:
        return (
          <div className="formbox-text">
            <p>El graduado será un profesional competente para:</p>
            <ul>
              <li>
                Desarrollar una sólida formación teórica y práctica para el
                ejercicio eficiente y responsable de la profesión de Corretaje y
                Negocios Inmobiliarios de propiedades. Participación de equipos
                de investigación y desarrollo.
              </li>
              <li>
                Suministrar los conocimientos jurídicos, contables e
                instrumentales que permitan a quienes se dediquen a esta
                actividad, la adquisición de un perfil profesional.
              </li>
              <li>
                Ofrecer una formación básica que prevea las estrategias y las
                motivaciones para el permanente perfeccionamiento y la
                capacitación continua en las diversas áreas de competencia de la
                profesión.
              </li>
              <li>
                Implementar los conocimientos esenciales de las diversas
                especialidades y orientaciones propias de la profesión.
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
    <Element name="c4">
    <div className="propForms1">
      <div className="formbox">
        <h2>
          Diplomatura Universitaria<br></br>en Proyectos Inmobiliarios
        </h2>

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
                Destinatarios
              </button>
              <div className="bline" />
              <button
                style={getButtonStyle(3)}
                onClick={() => handleButtonClick(3)}
              >
                Alcances y Salida Laboral
              </button>
            </div>
            {renderContent()}
          </div>

          <div className="form">
            <iframe
              width={350}
              height={390}
              src="https://inscripciones.ugd.edu.ar/simplified_contact_cases/new"
            />
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default RenderContent4;
