import React, { useState,useEffect } from "react";
import "./Hello.css";

import { HiLocationMarker } from "react-icons/hi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "../../Assets/Hello Image.png";
import Image2 from '../../Assets/tayma11.png'
import Image3 from '../../Assets/LIVRO22.png'
import Image4 from '../../Assets/LIVRO3.png'
import ligne1 from '../../Assets/LIVRO4.png'
import ligne2 from '../../Assets/IMG.png'
import Image5 from '../../Assets/LIVRO4.png'

import Aos from "aos";
import "aos/dist/aos.css";


const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 1000 / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 100);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{Math.round(count)}</span>;
};

const Hello = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 });

    const timer = setTimeout(() => {
      const sponsorsElement = document.getElementById("sponsor"); 
      if (sponsorsElement) {
        sponsorsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Hello" id='hero'>
      <div className="secContainerHello containerTT flex">
      {/* <div data-aos="fade-up" className="imgDiv">
          <img src={Image3} alt="Image Accueil" className="image3"/>
        </div>
        <div data-aos="fade-up" className="imgDiv">
          <img src={Image4} alt="Image Accueil" className="image3"/>
        </div>
       
       
        <div className="textDiv">
      
        </div> */}
        <div className="column1">
    <img src={Image3} alt="Colonne 1" className="IMGcolonne1" />
  </div>

  
  <div className="column2">
    <img src={Image4} className="IMGColonne2" />
  </div>

 
  <div className="column3">
    <div className="row top-row">
      <img src={ligne1} alt="Ligne 1 Colonne 3" className="image-top"/>
    </div>
    <div className="row bottom-row">
      <img src={ligne2} alt="Ligne 2 Colonne 3" className="image-bottom"/>
    </div>
 </div>
        
      </div>
    </div>
  );
};

export default Hello;
