import React from "react";
import "./Institute.css";
import ReactPlayer from "react-player";
import { Element } from "react-scroll";

const Institute = () => {
  return (
    <div className="institute">
      <div className="instituteIntro">
        <div className="iipart1">
          <img src="/assets/instituteLogo.png" />
          <p>
            El Instituto Universitario de Corretaje Inmobiliario (IUCILA) surge
            a partir del acuerdo entre la Confederación Inmobiliaria
            Latinoamericana (CILA) y la Universidad Gastón Dachary (UGD) a los
            efectos de impulsar la cooperación para la formación, capacitación y
            actualización profe- sional en toda Latinoamérica.
          </p>
        </div>
        <div className="iipart2">
          <h2>
            Generador del conocimiento e impulsor de la jerarquización del
            corretaje inmobiliario profesional en América Latina
          </h2>
        </div>
      </div>

      <div className="instituteVideo">
        {/* <video controls className="videoPlayer">
          <source src="/assets/video.mp4" />
        </video> */}
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3iS-wB66E4M?si=YpF63RyJVnahIlnL?&controls=0"  frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="backgroundColor">
        <Element name="desarrollar">
          <div id="desarrollar" className="desarrollar">
            <h2 className="titles">Actividades a desarrollar</h2>
            <div className="desboxes">
              <div className="desbox">
                <div className="desboxTitle">
                  <p>Formación</p>
                </div>
                <div className="desboxcontent">
                  <div className="desboxcontentp1">
                    <ul>
                      <li>Capacitación online</li>
                      <li>Eventos presenciales</li>
                      <li>Diplomaturas</li>
                    </ul>
                    <img src="/assets/connector.png" />
                    <p>Con microcredenciales académicas</p>
                  </div>
                  <ul>
                    <li>Licenciatura en Corretaje y Negocios Inmobiliarios</li>
                  </ul>
                </div>
              </div>
              <div className="desbox">
                <div className="desboxTitle">
                  <p>Certificaciones</p>
                </div>
                <div className="desboxcontent">
                  <ul>
                    <li>Sellos CILA</li>
                    <li>Insignias digitales</li>
                  </ul>
                  <p className="dbcd">
                    Dan fe de logros, habilidades o competencias dentro de la
                    actividad inmobiliaria, adquirida con formación y/o en base
                    a la experiencia.
                  </p>
                </div>
              </div>
              <div className="desbox">
                <div className="desboxTitle">
                  <p>Investigación y Divulgación</p>
                </div>
                <div className="desboxcontent">
                  <ul>
                    <li>Generación de conocimiento</li>
                    <li>Publicaciones</li>
                    <li>Espacios de análisis y debate</li>
                    <li>Toma de posiciones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Element>

        <Element name="fundadoras">
          <div id="fundadoras" className="fundadoras">
            <h2 className="titles">Instituciones Fundadoras</h2>

            <div className="fpart1">
              <div className="fpart1img">
                <img src="/assets/fpart1.png" />
              </div>
              <div className="fpart1line"></div>
              <div className="fpart1text">
                <p>
                  La Confederación Inmobiliaria Latinoamericana, fue fundada en
                  2012, integra a las organizaciones líderes del mercado de
                  bienes raíces en la región y representa a más de 700.000
                  Corredores y Empresas Inmobiliarias en 18 países de Latinoamérica.
                </p>
                <p>
                  Brinda soporte institucional a toda la comunidad inmobiliaria,
                  defendiendo los intereses profesionales de los agremiados y
                  buscando la integración de los Ne- gocios Internacionales,
                  creando condiciones éticas, competitivas y de excelencia
                  profesional.
                </p>
                <p>
                  Tiene por objetivo, la profesionalización del sector a todo
                  nivel velando por los intereses de todos y cada uno de sus
                  Miembros Asociados
                </p>
              </div>
            </div>
            <div className="fpart2">
              <div className="fpart2img">
                <img src="/assets/fpart2.png" />
              </div>
              <div className="fpart2line"></div>
              <div className="fpart2text">
                <p>
                  En 1997 la Universidad Gastón Dachary fue la primera
                  institución autorizada por la Comisión Nacional de Evaluación
                  y Acreditación Universitaria (CONEAU), y se somete
                  periódicamente a las evaluaciones externas del organismo que
                  analiza todas sus funciones, y atiende las recomendaciones
                  para el mejora- miento permanente de la calidad.
                </p>
                <p>
                  En 1998 la UGD inició sus actividades en la provincia de
                  Misiones, Argentina, y desde entonces viene ejecutando su plan
                  de crecimiento en otras provincias y en la Ciudad Autónoma de
                  Buenos Aires.
                </p>
                Desde sus comienzos, la UGD se ha enfocado en desarrollar una
                AMPLIA RED DE VÍNCULOS INTERNACIONALES, participando activamente
                en la Organiza- ción Universitaria Interamericana (OUI) y en la
                Red Interuniversitaria CIDIR.
                <p>
                  Además, se vincula a organizaciones que aportan a su
                  desarrollo en áreas temá- ticas específicas, como la Guardia
                  Civil Española para el crecimiento de sus pro- gramas en
                  Seguridad, o la Confederación Inmobiliaria Latinoamericana
                  para el avance de las carreras de Corretaje y Negocios
                  Inmobiliarios.
                </p>
                <p>
                  En 2017, la UGD obtuvo la acreditación por la CONEAU de su
                  Sistema de Edu- cación a Distancia (SIED). El equipo de la
                  Universidad innova constantemente para ofrecer las
                  herramientas y estrategias más efectivas, con el objetivo de
                  asegurar métodos de formación de alta calidad.
                </p>
              </div>
            </div>

            <div className="numText">
              <h2>
                Los números de la UGD confirman la vocación de educar e innovar
                en la oferta de carreras de grado y posgrado para el mundo
                empresarial, la salud, la educación y la seguridad.
              </h2>
              <div className="nums">
                <div className="num">
                  <p>26</p>
                  <h4>
                    Años formando<br></br> profesionales
                  </h4>
                </div>
                <div className="num">
                  <p>4250</p>
                  <h4>Egresados</h4>
                </div>
                <div className="num">
                  <p>18</p>
                  <h4>
                    Carreras<br></br> de Grado
                  </h4>
                </div>
                <div className="num">
                  <p>5</p>
                  <h4>
                    Especializaciones<br></br> y Maestrías
                  </h4>
                </div>
                <div className="num">
                  <p>1</p>
                  <h4>Doctorado</h4>
                </div>
                <div className="num">
                  <p>4</p>
                  <h4>
                    Continentes en<br></br> que se desempeñan<br></br> nuestros
                    egresados
                  </h4>
                </div>
                <div className="num">
                  <p>33</p>
                  <h4>
                    Universidades<br></br> en cooperación
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </div>

      <Element id="fundacionales" name="fundacionales">
        <div className="fundacionales">
          <h2 className="titles" style={{ color: "#FFF" }}>
            Antecedentes Fundacionales
          </h2>
          <div className="funboxes">
            <div className="funbox">
              <div className="funboxImg1">
                {/* <video controls src="/assets/fun1.mp4" /> */}
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XuNAFjuF7rs?si=xP4vdU8NHSdWKIAm&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="funbox-texts">
                <div className="funText">
                  <h3>
                    Creación de la Licenciatura en Corretaje y Negocios
                    Inmobiliarios
                  </h3>
                  <p>
                    Apreciaciones de Pedro Ramírez, Past president CILA 2023,
                    tras concretarse el primer convenio de cooperación entre
                    CILA y UGD, por el que se acordó la creación de la
                    Licenciatura en Corretaje y Negocios Inmobiliarios.
                  </p>
                  <p>Santa Fe, mar/2023</p>
                </div>
                <div className="fungreenLine"></div>
              </div>
            </div>
            <div className="funbox">
              <div className="funboxImg">
                <img src="/assets/fun2.png" />
              </div>
              <div className="funbox-texts">
                <div className="funText">
                  <h3>Firma del convenio de creación IUCILA</h3>
                  <p>
                    En momentos previos a la Asamblea General Or- dinaria de la
                    Confederación Latinoamericana.
                  </p>
                  <p>Ciudad de Panamá, sep/2023</p>
                </div>
                <div className="fungreenLine"></div>
              </div>
            </div>
            <div className="funbox">
              <div className="funboxImg">
                <img src="/assets/fun3.png" />
              </div>
              <div className="funbox-texts">
                <div className="funText">
                  <h3>Presentación de IUCILA</h3>
                  <p>
                    Se presentó el Instituto Universitario en Corretaje
                    Inmobiliario Latinoamericano (IUCILA) y sus líneas de
                    trabajo a las autoridades de las federaciones de 19 países
                    latinoamericanos presentes en Asamblea General Ordinaria de
                    la Confederación Latinoamericana.
                  </p>
                  <p>Ciudad de Panamá, sep/2023</p>
                </div>
                <div className="fungreenLine"></div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="redAcademica">
        <div id="redAcademica" className="redAcademica">
          <h2 className="titles">Red Académica</h2>
          <div className="raboxes1">
            <div className="rabox1">
              <img src="/assets/ra1.jpeg" />
              <p>
                C.I. Fabio Rivas Quevedo
                <br></br>
                Primera institución en adherirse a la Red Académica
                <br></br>
                CABA, may/2023
              </p>
            </div>
            <div className="rabox1">
              <img src="/assets/ra2.jpg" />
              <p>
                Suscripción de adhesión a la Red con COFECI y CIU
                <br></br>
                CABA, ene/2024
              </p>
            </div>
          </div>

          <div className="raboxes2">
            <div className="rabox2">
              <img src="/assets/ra3.png" />
            </div>
            <div className="rabox2">
              <img src="/assets/ra4.png" />
            </div>
            <div className="rabox2">
              <img src="/assets/ra5.png" />
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Institute;
