import React, { useEffect } from "react";
import "./Listing.css";


import image1 from "../../Assets/11.png"
import image2 from "../../Assets/111.png"
import image3 from "../../Assets/222.png"
import image4 from "../../Assets/33.png"
import image5 from '../../Assets/22.png'
import image6 from '../../Assets/333.png'

import Aos from "aos";
import "aos/dist/aos.css";


const Lists = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Listing section" id='group'>
      <div className="secContainer container">
        <div className="secHeader">
         
          <h1 data-aos="fade-up" className="title" style={{"color":"#1D8D7F"}}>
          Nos Services
            <span className="orangeDot"> .</span>
          </h1>
        </div>

        <div className="secContent grid">
          
            
              <div  className="singleListing1">
               <img src={image1} />
              </div>
              <div  className="singleListing" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <img src={image3} style={{"height":"300px","width":"auto","alignItems":"center"}}/>
              </div>
              <div  className="singleListing">
              <p className="paraStyle">Un bon service clientèle est essentiel pour répondre aux besoins , traiter les commandes, gérer les problèmes éventuels et fournir des informations sur les produits et services.
</p>
              </div>
              <div  className="singleListing">
                 <p className="paraStyle">Les clients peuvent suivre en temps réel le statut de leur commande via notre application mobile "Livro Clic"</p>
              </div>
              <div  className="singleListing" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <img src={image6}style={{"height":"300px","width":"auto"}}/>
              </div>
              <div  className="singleListing1">
              <img src={image5}/>
              </div>
              <div  className="singleListing1">
              <img src={image4}/>
              </div>
              <div  className="singleListing" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <img src={image2}style={{"height":"300px","width":"auto"}}/>
              </div>
              <div  className="singleListing">
              <p className="paraStyle">Les services de livraison à domicile offrent souvent plusieurs méthodes de paiement y compris le paiement en ligne par carte de crédit/débit ou même le paiement à la livraison en espèces.
</p>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
