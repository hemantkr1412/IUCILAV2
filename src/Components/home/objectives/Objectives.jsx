import React from "react";
import "./Objectives.css"

const Objectives = () => {
  return (
    <div className="objectives">
      <div className="obj">
        <h2>Nuestros objetivos Institucionales</h2>
        <ul>
          <li>
            Promover y facilitar la profesionalización de la actividad
            inmobiliaria en Latinoamérica.
          </li>
          <li>
            Crear y desarrollar una comunidad de profesionales  especialistas.
          </li>
          <li>
            Evaluar, reconocer y certificar  los conocimientos y  competencias de
            quienes los hayan adquirido  mediante distintas vías de formación o
            mediante el  ejercicio profesional. 
          </li>
        </ul>
      </div>
      <div className="greenLine"></div>
      <div className="val">
        <h2>Valores que promulgamos</h2>
        <ul>
          <li>
            Sólida formación teórica y práctica para el ejercicio eficiente y
            responsable de la profesión de Corretaje y negocios inmobiliarios.
          </li>
          <li>
            Formación profesional, técnica y ética, que le permita al egresado
            ejercer esta actividad con la atención centrada en la satisfacción
            plena de quien reciba sus servicios.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Objectives;
