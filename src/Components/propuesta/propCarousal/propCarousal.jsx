import "./propCarousal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import { propCarousalData } from "./propCarousalData";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PropCarousal = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(false);
  const navigate = useNavigate();

  const handleScrollToSection = (to, element) => {
    navigate(to);
    setTimeout(() => {
      const section = document.getElementById(element);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block:"start" });
      }
    }, 500);
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1220) {
        setSlidesToShow(3);
        setAutoplay(false);
      } else if (screenWidth >= 820) {
        setSlidesToShow(2);
        setAutoplay(false);
      } else if (screenWidth >= 770) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (screenWidth >= 600) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (screenWidth >= 402) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else {
        setSlidesToShow(1);
        setSlidesToScroll(1);
        setAutoplay(true);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="slider-box">
        <Slider ref={sliderRef} {...settings} className="slider">
          {propCarousalData.map((box, index) => (
            <div className="box" onClick={() => handleScrollToSection("/propuestaAcademica", box.href)}>
              <div key={index} className="box-item1">
                <img src={box.img}  />
                <div className="box-text">
                  <h4>{box.header}</h4>
                  <p>{box.description}</p>
                </div>
                <div className="boxLine1" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button className="next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default PropCarousal;
