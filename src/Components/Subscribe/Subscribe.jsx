import React, { useEffect } from "react";
import "./Subscribe.css";
import FormDialog from "./FormDialog";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from '../../Assets/scansubscribe.png'
import phone from '../../Assets/LIVRO22.png'
import image2 from '../../Assets/image9.png'
import apple from '../../Assets/apple.png'
import google from '../../Assets/google.png'

const Subscribe = () => {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  const handleContactClick = () => {
    window.location.href = 'https://www.instagram.com/cogeb_immobiliere?igsh=amdkdGloNG11bWt4';
  };

  return (
    <div className="Subscribe section">
      <div className="secContent">
            <div className="image-column">
              <img src={image1} alt="Scan me" className="scandevice" style={{"height":"180px"}}/>
            </div>
          <div className="text-column">
            <h1 className="title" id="#textlivro">LIVRO CLIC</h1>
            <img src={image2}/>
            <p>LIVRO CLIC, une plateforme  révolutionnaire qui redéfinit la manière dont les  consommateurs ...</p>
            <div className="imageSUB">
                <img src={apple} style={{"height":"55.05px","width":"160px"}}/>
                <img src={google} style={{"height":"55.05px","width":"160px"}}/>
            </div>
          </div>
          <div className="image-column2">
            <img src={phone} alt="Phone" />
          </div>
</div>
     
    </div>
  );
};


export default Subscribe;
