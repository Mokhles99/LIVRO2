import React, { useEffect } from 'react';
import './Footer.css';
import { ImFacebook} from 'react-icons/im';
import { BsTwitter} from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';

import Aos from 'aos';
import 'aos/dist/aos.css';
import image from '../../Assets/LIVRO.png';
import imagefooter from '../../Assets/livrofooter.png'
import vision from '../../Assets/visionfooter.png'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='Footer'>
      <div className='secContainer'>
        {/* Column 1 - Logo */}
        <div className='footerColumn'>
          <img src={imagefooter} alt='Logo' className='footerLogo' />
        </div>

        {/* Column 2 - Information Links */}
        <div className='footerColumn'>
          <span className='linkTitle'>Information</span>
          <a href='#' className='linkTitleP'>Accueil</a>
          <a href='#' className='linkTitleP'>À propos</a>
          <a href='#' className='linkTitleP'>Nos services</a>
          <a href='#' className='linkTitleP'>Contact</a>
        </div>

        {/* Column 3 - Contact */}
        <div className='footerColumn'>
          <span className='linkTitle'>Contactez-nous</span>
          <span className='contactInfo'>contactlivroclic@gmail.com</span>
          <span className='contactInfo'>+216 52 006 873</span>
        </div>

        {/* Column 4 - Social Links */}
        <div className='footerColumn'>
  <span className='linkTitle'>Suivez-nous</span>
    
  <div className="social-icons">
    <a href="https://facebook.com" className="icon">
      <ImFacebook />
    </a>
    <a href="https://twitter.com" className="icon">
      <BsTwitter />
    </a>
    <a href="https://instagram.com" className="icon">
      <AiFillInstagram />
    </a>
    <a href="https://instagram.com" className="icon">
      <AiFillInstagram />
    </a>
  </div>
</div>

        {/* Column 5 - Newsletter */}
        <div className='footerColumn'>
          <span className='linkTitle'>Abonnez-vous</span>
          <span className='contactInfo'> À notre newsletter pour  recevoir nos dernières nouvelles. </span>
          <div className="form-container">
  <input type="email" className="input-email" placeholder="Écrivez votre adresse e-mail"/>
  <button className="subscribe-button">S'abonner</button>
</div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className='footerBottom'>
        <img src={vision} style={{"width":"670px","height":"45px","marginBottom":"2rem"}}/>
        <div className='line' />
        <span className='copyRight'>© 2024 LIVRO All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
