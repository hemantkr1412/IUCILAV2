import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "./Propuesta.css";

const RenderContent6 = () => {
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
              Tendrás el máximo nivel de formación, con una visión integral del
              mundo del Real State, profundos conocimientos de las estrategias y
              un amplio abanico de vínculos para el desarrollo de negocios.
            </p>
            <p>
              Esta carrera ofrece formación en la intermediación, gestión y
              desarrollo de proyectos y negocios inmobiliarios. Otorga un título
              universitario que habilita para ejercer la profesión de Corredor y
              Tasador Inmobiliario, así como para asesorar, promover y realizar
              operaciones relacionadas.
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
                        Licenciado en Corretaje y Negocios Inmobiliarios (4
                        años)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="fti1-text">
                  <div>
                    <img src="/assets/form2.png" />
                  </div>
                  <div>
                    <h5>Títulos Intermedio:</h5>
                    <ul>
                      <li>Corredor Inmobiliario (3 años)</li>
                    </ul>
                  </div>
                </div>
                <div className="fti1-text">
                  <div>
                    <img src="/assets/form3.png" />
                  </div>
                  <div>
                    <h5>Títulos aprobados por:</h5>
                    <ul>
                      <li>
                        Resolución del Ministerio de Educación Nro. 2349/22.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="fti2">
                <Link
                  to="https://drive.google.com/file/d/1KltzWkbPjBt5eCRMai-gOuZ2bz17qenw/view?usp=drive_link "
                  target="_blank"
                >
                  <button className="plan">
                    Descargar<br></br>
                    Plan de Estudios
                  </button>
                </Link>
                <Link to="https://virtual.ugd.edu.ar/ar/equivalencies/studentQuery" target="_blank">
                  <button className="plan">Equivalencias</button>
                </Link>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="formbox-text">
            <p>
              Quienes se desempeñen en el ámbito inmobiliario y aspiren a
              mejorar su formación, adquiriendo nuevas capacidades específicas y
              obteniendo un título habilitante.
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
                Desarrollar el corretaje con una sólida formación teórica y
                práctica para el ejercicio de los negocios inmobiliarios.
              </li>
              <li>Participar en equipos de investigación y desarrollo.</li>
              <li>
                Desarrollar y aplicar conocimientos jurídicos, contables e
                instrumentales que faciliten la adquisición de un perfil
                profesional adecuado para el ejercicio de la actividad.
              </li>
              <li>
                Aplicar las estrategias necesarias para el perfeccionamiento
                constante y la capacitación continua en las diversas áreas de
                competencia de la profesión.
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
    <Element name="c6">
      <div id="c6" className="propForms1">
        <div className="formbox">
          <h2>
            Licenciatura en Corretaje<br></br>y Negocios Inmobiliarios
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
                height={300}
                style={{ border: "none" }}
                src="https://inscripciones.ugd.edu.ar/simplified_contact_cases/new?theme=iucila&account=001Hp00002dZGlaIAG&office=a0aHp00000AH7RiIAL"
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default RenderContent6;
