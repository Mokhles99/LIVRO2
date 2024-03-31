import React, { useState, useEffect } from "react";
import "./About.css";
import Accordion from "./Accordion";

import image from '../../Assets/Helo2.png'

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [active, setActive] = useState("Compétence Prouvée");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="About section container" id="about">
      <div className="secContainer flex">
        <div data-aos="fade-up" className="imgDiv">
          <img src={image} alt="Image À Propos" />
        </div>

        <div className="textDiv">
          <div data-aos="fade-down" className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText">Nos Valeurs</span>
              <h1>
                La Valeur Que Nous Vous Apportons
                <span className="orangeDot"> .</span>
              </h1>
              <p>
                Nous sommes toujours prêts à aider en offrant les meilleurs services pour vous. Nous croyons qu'un bon lieu de vie peut rendre votre vie meilleure !
              </p>
            </div>
          </div>
          <div data-aos="fade-down" className="accordion grid">
            <Accordion
              title="Compétence Prouvée en Immobilier et Produits Sanitaires"
              desc="Notre groupe possède une solide expérience dans les secteurs de l'immobilier et des produits sanitaires. Nous excellons dans la fourniture de propriétés de premier choix et de produits sanitaires de haute qualité, garantissant la satisfaction dans les deux domaines."
              active={active}
              setActive={setActive}
            />

            <Accordion
              title="Connaissance Approfondie du Marché"
              desc="Notre équipe possède une connaissance approfondie du marché immobilier local et de l'industrie des produits sanitaires. Nous restons à l'affût des dernières tendances et développements, offrant à nos clients des insights et conseils précieux dans ces domaines."
              active={active}
              setActive={setActive}
            />

            <Accordion
              title="Solutions Personnalisées pour les Clients"
              desc="Reconnaissant les besoins uniques de chaque client, nous proposons des solutions sur mesure qui répondent à la fois aux acquisitions immobilières et aux sélections de produits sanitaires, garantissant une expérience de service personnalisée et complète."
              active={active}
              setActive={setActive}
            />

            <Accordion
              title="Engagement envers les Normes Éthiques"
              desc="L'intégrité est primordiale dans nos opérations. Nous adhérons aux normes éthiques les plus élevées dans toutes nos transactions, en maintenant la transparence dans le secteur immobilier et le marché des produits sanitaires."
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
