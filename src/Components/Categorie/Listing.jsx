import React, { useEffect } from "react";
import "./Listing.css";


import image11 from "../../Assets/11.png"


import image1 from '../../Assets/bouteille.png'
import imagecat1 from '../../Assets/catbouteille.png'
import imagecat2  from '../../Assets/citerne.png'
import image2 from "../../Assets/111.png"
import image3 from "../../Assets/222.png"
import image4 from "../../Assets/33.png"
import image5 from '../../Assets/22.png'
import image6 from '../../Assets/333.png'

import Aos from "aos";
import "aos/dist/aos.css";


const Categorie = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Listing section">
      <div className="secContainer container">
        <div className="secHeader">
         
          <h1 data-aos="fade-up" className="title" style={{"color":"#1D8D7F"}}>
          Nos CATEGORIES
            <span className="orangeDot"> .</span>
          </h1>
        </div>

        <div className="secContentCatOne grid">
        <div  className="singlelistingCatOne">
               <img src={imagecat1} style={{"width":"320px","height":"300px"}}/>
              </div>
              <div  className="singlelistingCatOne">
               <img src={imagecat2} style={{"width":"320px","height":"300px"}}/>
              </div>

 
        </div>
       

        <div className="secContentCat grid">
          
            
              <div  className="singlelistingCat">
              <div className="imgBouteille">
                <button className="plusButton">+</button>
              </div>
               <img src={image1} className="imgcategorie"/>
              </div>
              <div  className="singlelistingCat">
              <div className="imgBouteille">
                <button className="plusButton">+</button>
              </div>
               <img src={image1} className="imgcategorie"/>
              </div>
              <div  className="singlelistingCat">
              <div className="imgBouteille">
                <button className="plusButton">+</button>
              </div>
               <img src={image1} className="imgcategorie"/>
              </div>
              <div  className="singlelistingCat">
              <div className="imgBouteille">
                <button className="plusButton">+</button>
              </div>
               <img src={image1} className="imgcategorie"/>
              </div>
              <div  className="singlelistingCat">
              <div className="imgBouteille">
                <button className="plusButton">+</button>
              </div>
               <img src={image1} className="imgcategorie"/>
              </div>
              <div  className="singlelistingCat">
              <div className="imgBouteille">
                <button className="plusButton">+</button>
              </div>
               <img src={image1} className="imgcategorie"/>
              </div>
              <div  className="singlelistingCat">
              <div className="imgBouteille">
                <button className="plusButton">+</button>
              </div>
               <img src={image1} className="imgcategorie"/>
              </div>
              <div  className="singlelistingCat">
              <div className="imgBouteille">
                <button className="plusButton">+</button>
              </div>
               <img src={image1} className="imgcategorie"/>
              </div>
{/* 
              <div  className="bubblett">
            
             
              </div> */}
              
           
             
              {/* <div  className="singlelistingCat" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <img src={image1} />
              </div> */}
             
              
              {/* <div  className="singlelistingCat" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <img src={image1} />
              </div>
              <div  className="singlelistingCat">
              <img src={image1} />
              </div>
              <div  className="singlelistingCat">
              <img src={image1} />
              </div>
              <div  className="singlelistingCat" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <img src={image1} />
              </div> */}
             
        </div>
      </div>
    </div>
  );
};

export default Categorie;
