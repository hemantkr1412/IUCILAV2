import React from "react";
import "./Home.css";
import Objectives from "./objectives/Objectives";
import Somos from "./somos/Somos";
import Carousal from "./carousal/Carousal";
import Notice from "./notice/Notice";

const Home = () => {
  return (
    <>
      <div className="Rline"></div>
      <div className="home">
        <div className="intro">
          <div className="introText">
            <h1>Inspiramos la jerarquización del corretaje en Latinoamérica</h1>
            <p>
              Somos el Instituto  de Formación Oficial del sector inmobiliario
              latinoamericano.<br></br> 700.000 corredores en 18 países
              conforman la Confederación Inmobiliaria Latinoamericana (CILA)
            </p>
          </div>
        </div>

        <div className="intro2">
          <div className="intro2part1">
            <div className="title2">
              <h2>ALIANZA ESTRATÉGICA</h2>
              <p>
                Cooperación para la formación, capacitación
                <br className="break"></br> y actualización profesional en
                Latinoamérica.
              </p>
            </div>
            <div className="intro2Img">
              <img src="/assets/intro2.webp" />
            </div>
          </div>
          <div className="intro2part2">
            <h2>Usina del conocimiento en Corretaje Inmobiliario</h2>
            <p>
              Impulsor de la jerarquización del <br></br> Corretaje Profesional
              en Latinoamérica
            </p>
          </div>
        </div>
        <Objectives />
        <div className="Gline"></div>
        <Somos />
        <Carousal />
        <div className="Gline"></div>
        <Notice />
      </div>
    </>
  );
};

export default Home;
