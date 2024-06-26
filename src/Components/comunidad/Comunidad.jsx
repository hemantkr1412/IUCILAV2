import React from "react";
import "./Comunidad.css";
import { directorsInfo } from "./directorsInfo";

const Comunidad = () => {
  return (
    <div className="comunidad">
      <div className="directors">
        {directorsInfo.map((info, index) => (
          <div key={index} className="directorsProfile">
            <h3>{info.title}</h3>
            <div className="directorsBox">
              <div className="directorsImg">
                <img src={info.img}  />
              </div>
              <div className="directorsText">
                <h2>{info.name}</h2>
                <p>{info.para}</p>
              </div>
            </div>
            {index !== directorsInfo.length - 1 && <div className="slimGreen"></div>}
          </div>
        ))}
      </div>

      <div className="comunidadIntro">
        <div className="comunidadIntroText">
          <h2>Nuestros Docentes</h2>
          <p>
            Nuestro cuerpo docente está compuesto por profesionales
            universitarios de dilatada trayectoria en el ejercicio de la
            actividad inmobiliaria, con lo que sus clases y ejemplos están
            directamente vinculados a casos concretos, lo que asegura la
            pertinencia y actualidad de los conocimientos y experiencias
            transmitidas. A su vez, estos cuentan con el apoyo de especialistas
            en pedagogía, que los asesoran y apoyan en el desarrollo de
            material, de las aulas virtuales y en las actividades docentes. A
            través de CILA y sus referentes, entablamos vínculos con los
            referentes de la profesión en distintos países, lo que nos permite
            asegurar diversidad de miradas y atender las particularidades en
            cada región.
          </p>
        </div>
      </div>

      <div className="comunidadIntro2">
        <div className="comunidadIntro2Text">
          <h2>Nuestros estudiantes</h2>
          <p>
            Nuestros estudiantes pueden ser tanto jóvenes que buscan una carrera
            a fin de orientar su desarrollo profesional, como personas que ya
            están inmersas en la actividad inmobiliaria y buscan fortalecer su
            perfil, incorporar nuevos conocimientos y tomar contacto con
            reconocidos profesionales e instituciones del sector.
          </p>
        </div>
      </div>

      <div className="comunidadLast">
        <p className="comunidadLastTitle">
          De acuerdo a su situación y aspiraciones, pueden acceder a nuestra
          formación de distintas formas:
        </p>
        <div className="comunidadBoxes">
          <div className="comunidadBox">
            <div className="alphabets">
              <p>A</p>
            </div>
            <div className="comunidadBoxText">
              <p>
                <b>
                  Si buscas una buscas una carrera universitaria para tu
                  desarrollo futuro. Puede hacer la licenciatura completa.
                </b>
              </p>
              <ul>
                <li>Cuatro años de duración.</li>
                <li>Diplomaturas intermedias.</li>
                <li>Título intermedio de Corredor Inmobiliario.</li>
              </ul>
            </div>
          </div>
          <div className="comunidadBox">
            <div className="alphabets">
              <p>B</p>
              </div>
            <div className="comunidadBoxText">
              <p>
                <b>
                  Si cursaste antes una carrera de Corredor Inmobiliario o
                  similar:
                </b>{" "}
                Podemos analizar los planes de estudio de tu formación y
                reconocerte las materias que hayas aprobado, para que puedas
                cursar la Licenciatura o la tecnicatura en Corretaje
                inmobiliario.
              </p>
              <ul>
                <li>Uno a tres años de duración.</li>
              </ul>
            </div>
          </div>
          <div className="comunidadBox">
            <div className="alphabets"><p>C</p></div>
            <div className="comunidadBoxText">
              <p>
                <b>
                  Si buscas formaciones de corta duración en un tema específico:
                </b>{" "}
                Puedes cursar diplomaturas que están formadas por materias de la
                Licenciatura. Adquieres formación que te permita una pronta
                inserción salida laboral.
              </p>
              <ul>
                <li>Cuatro diplomaturas.</li>
                <li>Acreditables para el cursado de la licenciatura.</li>
              </ul>
            </div>
          </div>
          <div className="comunidadBox">
            <div className="alphabets"><p>D</p></div>
            <div className="comunidadBoxText">
              <p>
                <b>Si son un idóneo acreditado:</b> Para quienes se desempeñan
                en la actividad inmobiliaria con una antigüedad mayor a cinco
                años, siendo reconocidos y matriculados por los colegios
                profesionales, otorgamos materias en base a las conocimientos y
                competencias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comunidad;
