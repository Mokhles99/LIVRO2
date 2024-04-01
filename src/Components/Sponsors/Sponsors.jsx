import React, { useEffect } from "react";
import "./Sponsors.css";


import logo1 from '../../Assets/Logo1.png'
import logo2 from '../../Assets/Logo1.png'
import logo3 from '../../Assets/Logo1.png'
import logo4 from '../../Assets/Logo1.png'
import Image7 from '../../Assets/LIVRO7.png'
import Image8 from '../../Assets/mainprp.png'

import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'
//
import Aos from "aos";
import "aos/dist/aos.css";

const Sponsors = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="Sponsors" id='about'>
        {/* <div data-aos="fade-up" className="secContainer flex"> */}
        <div className="aboutSponsorContainer">
          <div className="aboutSponsorText">
            <h1> À Propos</h1>
            <p>LIVRO CLIC, une plateforme  révolutionnaire qui redéfinit la manière dont les  consommateurs accèdent aux produits essentiels.  Dans ce contexte, notre LIVRO CLIC, une plateforme  révolutionnaire qui redéfinit la manière dont les  consommateurs accèdent aux produits essentiels.  Dans ce contexte,  notre notre notre </p>
          </div>
          <div className="section-info-and-imgs">
            <div className="info-1">
              <p>COMMENT</p>
            </div>
            <div className="aboutSponsorImage">
            <img src={Image7} alt="Image Accueil" className="imgbot" />
            <img src={Image8} alt="Image Accueil" className="img-hands" />
          </div>
            <div className="info">
            <p>ÇA MARCHE ?</p>

            </div>
          </div>
        

        </div>

        {/* </div> */}
      </div>
      {/* <div className="cardDiv"> */}
      <div className="iconContainer">
        <div className="icon">
          <img className="imgIC" src={icon2} />
          <h3>CHOISISSEZ VOS ARTICLES</h3>
          <p>LIVRO CLIC, une plateforme révolutionnaire qui redéfinit la manière dont les consommateurs accèdent aux produits essentiels.</p>
        </div>
        <div className="icon">
          <img className="imgIC" src={icon2} />
          <h3>NOUS LIVRONS VOTRE COMMANDE</h3>
          <p>LIVRO CLIC, une plateforme révolutionnaire qui redéfinit la manière dont les consommateurs accèdent aux produits essentiels.</p>
        </div>
        <div className="icon">
          <img className="imgIC" src={icon2} />
          <h3>CLIENT SATISFAIT</h3>
          <p>LIVRO CLIC, une plateforme révolutionnaire qui redéfinit la manière dont les consommateurs accèdent aux produits essentiels.</p>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Sponsors;
