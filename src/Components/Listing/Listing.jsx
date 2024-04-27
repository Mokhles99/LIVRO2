import React, { useEffect } from "react";
import "./Listing.css";

import { FaBed } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { GiBedLamp } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { GiOlive } from "react-icons/gi";
import { FaBottleDroplet } from "react-icons/fa6";
import { GiSpiralBottle } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
import { GiWoodPile } from "react-icons/gi"
import { GiWoodenPier } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa6";
import { FaSink } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi"
import { GiKitchenTap } from "react-icons/gi";
import { BiSolidBath } from "react-icons/bi";
// import image1 from "../../Assets/House (1).png";
// import image1 from "../../Assets/doc2/IMGCOGEB1.jpg"
import image1 from "../../Assets/bat25.jpg"
// import image2 from "../../Assets/House (4).png";
// import image2 from "../../Assets/doc3/IMG2.jpg";
import image2 from "../../Assets/doc2/mok.jpg";
// import image3 from "../../Assets/House (5).png";
import image3 from "../../Assets/doc3/IMG3.jpg";

// import image4 from "../../Assets/House (2).png";
import image4 from "../../Assets/zit.jpg";
// import image5 from "../../Assets/House (1).jpg";


import image7 from "../../Assets/import.jpg"

import Aos from "aos";
import "aos/dist/aos.css";

const properties = [
  {
    id: 1,
    image: image1,
    name: "COGEB, IMMOBILIERE",
    price: "24/24",
    desc: "Une entreprise spécialisée dans la vente de produits sanitaires",
    beds: 6,
    icons: [< FaTreeCity className="icon" />, <GiWoodPile className="icon"/>, < GiWoodenPier className="icon" /> ,<FaIndustry className="icon" />]
  },
  {
    id: 2,
    image: image2,
    name: "COGEB",
    price: "24/24",
    desc: "Une entreprise spécialisée dans la vente de produits sanitaires",
    beds: 4,



 
    icons: [   <FaBath className="icon" />, <MdTableRestaurant className="icon" />  ,<FaSink className="icon"/> ,<FaToilet className="icon"/> ]
                    
  },
  {
    id: 3,
    image: image3,
    name: "COGEB, SOPRODI",
    price: "24/24",
    desc: "Une entreprise spécialisée dans la vente de produits sanitaires",
    beds: 5,
    icons:[ <GiKitchenTap className="icon"/>,  <BiSolidBath className="icon"/>,]

  },
  {
    id: 4,
    image: image4,
    name: "COGEB, EL BARAKA",
    price: "24/24",
    desc: "Une entreprise spécialisée dans la vente de produits sanitaires",
    beds: 7,
    icons: [<GiSpiralBottle className="icon" />,  <GiOlive className="icon" />, <FaBottleDroplet className="icon" />, <GiFruitTree className="icon" />]
  },
  {
    id: 5,
    image: image7,
    name: "COGEB, INTERNATIONAL",
    price: "24/24",
    desc: "Une entreprise spécialisée dans la vente de produits sanitaires",
    beds: 8,
    icons:[ <FaBuildingColumns className="icon"/>, <FaBuilding className="icon"/>,<GiFamilyHouse  className="icon"/>,<BiSolidBuildingHouse className="icon"/>]
  },
  {
    id: 6,
    image: image6,
    name: "COGEB , Tunisie",
    price: "24/24",
    desc: "Une entreprise spécialisée dans la vente de produits sanitaires",
    beds: 6,
  },
];

const Listing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Listing container section" id="group">
      <div className="secContainer">
        <div className="secHeader">
          <span data-aos="fade-up" className="orangeText">
            Nos Sites
          </span>
          <h1 data-aos="fade-up" className="title">
          Engagez-vous vers l'Excellence avec le Groupe COGEB
            <span className="orangeDot"> .</span>
          </h1>
          <p data-aos="fade-up">
            Satisfaire nos clients , Dépassez vos frontières .
          </p>
          <div data-aos="fade-up" className="btns flex">
            <button className="btn active">Groupe Exclusif</button>
          </div>
        </div>

        <div className="secContent grid">
          {properties.map(({ id, image, name, price, desc, beds , icons = [] }) => {
            return (
              <div key={id} className="singleListing">
                <div data-aos="fade-down" className="imgDiv">
                  <img src={image} alt="Image de la maison" />
                </div>
                <div data-aos="fade-up" className="info">
                  <h2 className="name">{name}</h2>
                  <span className="price">
                    <span className="digits">{price}</span>
                    <span className="orangeText"> h</span>
                    <span className="duration"> / 7 jours</span>
                  </span>
                  <p>{desc}</p>
                  <div className="ammenities flex">
                    {/* <span className="flex">
                      <FaBed className="icon" />
                    </span> */}
                     {icons && icons.map((icon, index) => (
              <span key={index} className="flex">{icon}</span>
            ))}

                    {/* <span className="flex">
                      <MdTableRestaurant className="icon" />
                    </span>

                    <span className="flex">
                      <GiBedLamp className="icon" />
                    </span>

                    <span className="flex">
                      <FaBath className="icon" />
                    </span>
                    <span className="flex">
                      <GiOlive className="icon" />
                    </span>
                   
                    <span className="flex">
                      <FaBottleDroplet className="icon" />
                    </span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listing;
