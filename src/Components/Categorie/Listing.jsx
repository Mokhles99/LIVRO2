import React, { useEffect,useState } from "react";
import "./Listing.css";
import { useDispatch, useSelector } from "react-redux";

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AndroidIcon from '@mui/icons-material/Android';
import MouseIcon from '@mui/icons-material/Mouse';
import { MdMouse } from 'react-icons/md';

import { PiCursorClickFill } from "react-icons/pi";
import image11 from "../../Assets/11.png"
import { MdOutlineStar } from "react-icons/md";

import image1 from '../../Assets/bouteille.png'

import imageCit from '../../Assets/citernee.png'
import imagecat1 from '../../Assets/catbouteille.png'
import imagecat2 from '../../Assets/citerne.png'
import cardBgImg from '../../Assets/card22.png'
import cardBgImg2 from '../../Assets/card33.png'

import image2 from "../../Assets/111.png"
import image3 from "../../Assets/222.png"
import image4 from "../../Assets/33.png"
import image5 from '../../Assets/22.png'
import image6 from '../../Assets/333.png'
import { addToCarttwo, getCarttwo } from '../../actions/carttwo.actions';

import Aos from "aos";
import "aos/dist/aos.css";
import { getAllProducts } from "../../actions/product.actions";


const data = [
  { id: 1, name: "Marwa", img: image1, bgImg: cardBgImg },
  { id: 2, name: "Tijen", img: image1, bgImg: cardBgImg },
  { id: 3, name: "Marwa", img: image1, bgImg: cardBgImg },
  { id: 4, name: "Marwa", img: image1, bgImg: cardBgImg },
  { id: 5, name: "Marwa", img: image1, bgImg: cardBgImg },
  { id: 6, name: "Marwa", img: image1, bgImg: cardBgImg },
  { id: 7, name: "Marwa", img: image1, bgImg: cardBgImg },
  { id: 8, name: "Marwa", img: image1, bgImg: cardBgImg },
 
];
const datatwo = [
  { id: 1, name: "Tijen", img: imageCit, bgImg: cardBgImg },
  { id: 2, name: "Sabrine", img: imageCit, bgImg: cardBgImg },
  { id: 3, name: "Sabrine", img: imageCit, bgImg: cardBgImg },
  { id: 4, name: "Sabrine", img: imageCit, bgImg: cardBgImg },
  { id: 5, name: "Tijen", img: imageCit, bgImg: cardBgImg },
  { id: 6, name: "Tijen", img: imageCit, bgImg: cardBgImg },
  { id: 7, name: "Marwa", img: imageCit, bgImg: cardBgImg },
  { id: 8, name: "Tijen", img: imageCit, bgImg: cardBgImg },
 
];



const Categorie = () => {
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState([]);
  

  const [datathree, setDatathree] = useState([]);
  const [datafour, setDatafour] = useState([]);
  const [datafive,setDatafive]=useState([]);
  const [activeButton, setActiveButton] = useState('eau');

  const  mokles = useSelector(state => state.product.products);
  const cart = useSelector(state => state.carttwo.carttwo); 
  const loading = useSelector(state => state.carttwo.loading);
  const error = useSelector(state => state.carttwo.error);


  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: '#1D8D7F',
    borderRadius: '30px',
    boxShadow:30,
    p: 4,
    color: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Set to row to place elements side by side
    justifyContent: 'center', // Center buttons horizontally
    gap: 2, // Space between buttons
  };
  
  const buttonStyle = {
    bgcolor: 'white',
    color: 'black',
    borderRadius: '15px',
    ':hover': {
      bgcolor: 'white',
      color:"#DAA520"
    },
    mt: 1,
  };
  


  useEffect(() => {
    dispatch(getAllProducts());
    console.log('Produits chargés:', mokles);
  }, [dispatch]);

  useEffect(() => {
    const filteredBouteilles = mokles.filter(product => product.type === 'bouteille');
    const filteredCiternes = mokles.filter(product => product.type === 'citerne');
    const filteredPack = mokles.filter(product => product.type == 'pack citerne')

    setDatathree(filteredBouteilles);
    setDatafour(filteredCiternes);
    setDatafive(filteredPack);

    console.log('Bouteilles:', filteredBouteilles);
    console.log('Citernes:', filteredCiternes);
    console.log('Pack citerne',filteredPack);
  }, [mokles]);

  useEffect(() => {
    // Définir datathree comme état initial pour currentData
    setCurrentData(datathree);
  }, [datathree]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleWaterClick = () => {
    console.log('Eau clicked, setting data:', datathree);
    setCurrentData(datathree);
    setActiveButton('eau');
  };

  const handleCiterneClick = () => {
    console.log('Citerne clicked, setting data:', datafour);
    setCurrentData(datafour);
    setActiveButton('citerne');
  };

  const handlePackClick = () => {
    console.log('pack clicked, setting data:', datafive);
    setCurrentData(datafive);
    setActiveButton('pack');
  };

  const handleAddToCart = (productId) => {
    if (!productId) {
        console.error("Product ID is undefined!");  // Pour le débogage
        return;
    }
    // L'appel à votre action Redux pour ajouter au panier
    dispatch(addToCarttwo(productId, 1));  // La quantité est définie à 1 pour cet exemple
};


  const isDataTwo = currentData === datatwo;
  const isDataFour = currentData === datafour;
  const isDataFive = currentData == datafive
  return (
    <div className="Listing section" id='categorie'>
      <div className="secContainer container">
        <div className="secHeader">

          <h1 data-aos="fade-up" className="title" style={{ "color": "#1D8D7F" }}>
            Nos Catégories
            <span className="orangeDot"> .</span>
          </h1>
        </div>

        <div className="secContentCatOne grid">
       

          <div className="singlelistingCat singlelistingCatOne">
            <img src={cardBgImg2} className="img-bg" />
            <div className="imgBouteille-cat">
            <button className={`btn-water ${activeButton === 'eau' ? 'active' : ''}`} onClick={handleWaterClick}>Eau</button>
            </div>
            <img src={imagecat1} className="imgcategorie" />
          </div>

          <div className="singlelistingCat singlelistingCatOne">
            <img src={cardBgImg2} className="img-bg" />
            <div className="imgBouteille-cat">
            <button className={`btn-citern ${activeButton === 'citerne' ? 'active' : ''}`} onClick={handleCiterneClick}>Citerne</button>

            </div>
            <img src={imagecat2} className="imgcategorie2" />
          </div>

         


        </div>
        {activeButton === 'citerne' && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px',marginBottom:'70px' }}>
          {/* <button className="btn-citernsimple" >Simple Citerne </button> */}
          <button className="btn-citernsimple" style={{marginLeft:'50px'}} onClick={handlePackClick}>
          
          Consulter Packs 
          <PiCursorClickFill style={{ marginLeft: '8px', verticalAlign: 'middle' }} /></button>
        </div>
      )}

{activeButton === 'eau' && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px',marginBottom:'150px' }}>
          {/* <button className="btn-citernsimple" >Simple Citerne </button> */}
          <button className="btn-promo" style={{marginLeft:'50px'}}>
          
          Promotion
          {/* <MdOutlineStar style={{ marginLeft: '4px', verticalAlign: 'middle' }} /> */}
          </button>
        </div>
      )}


        <div className="secContentCat">
          {currentData.map((item) => (
            <div key={item._id} className="singlelistingCat">
              <img src={cardBgImg} className="img-bg" />
              <div className="imgBouteille">
              <button
          className="plusButton"
          onClick={() => handleAddToCart(item._id)} // Assuming `id` is the product ID and quantity is 1
        >
          +
        </button>
              </div>
              <img src={item.files[0].url} className={`imgcategorie ${isDataFour ? 'datatwo-img' : ''}`} />
              <span className="text-below">{item.name}</span>
            </div>
          ))}
        </div>
      

      </div>
      <Modal
  open={showModal}
  onClose={handleCloseModal}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box sx={modalStyle}>
    <h2 id="modal-title" style={{ fontFamily: '"Cream Cake", cursive' }}>Choose an option</h2>
    <Box sx={buttonContainerStyle}> {/* Container for the buttons */}
      <Button
        sx={buttonStyle}
        startIcon={<AndroidIcon />}
        onClick={() => console.log('Go to app')}
      >
        GO TO APP
      </Button>
      <Button
        sx={buttonStyle}
        startIcon={<MouseIcon />}
        onClick={() => console.log('Get devis')}
      >
        GET DEVIS
      </Button>
    </Box>
  </Box>
</Modal>

    </div>
  );
};

export default Categorie;
