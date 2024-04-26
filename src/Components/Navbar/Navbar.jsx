import React, { useState } from "react";
import "./Navbar.css";

 //
import { SiTreehouse } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import image from "../../Assets/LIVRO.png";
import { FiShoppingCart } from "react-icons/fi";
// import image from "../../Assets/cogeb.png";

const Navbar = () => {
  //function to show navbar
  const [menu, setMenu] = useState("menu");
  const shownavbar = () => {
    setMenu("showNavbar menu");
  };

  //function to remove navbar
  const removenavbar = () => {
    setMenu("menu");
  };

  //function to add a background to the navbar on scroll
  const [transparent, setTransparent] = useState("Navbar");
  const addBG = () => {
    if (window.scrollY >= 10) {
      setTransparent("Navbar addBackground");
     
    } else {
      setTransparent("Navbar");
    }
  };
  window.addEventListener("scroll", addBG);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGroup = () => {
    const groupElement = document.getElementById("group");
    if (groupElement) {
      groupElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    const aboutUsElement = document.getElementById("about");
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHero = () => {
    const aboutUsElement = document.getElementById("hero");
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={transparent}>
      <div className="logoDiv">
        {/* <SiTreehouse className="icon" /> */}
        <img src={image} className="logonav"/>
        {/* <span>Cogeb</span> */}
      </div>

      <div className={menu}>
        <ul>
          <li className="navList" onClick={scrollToHero}>Accueil</li>
          <li className="navList"onClick={scrollToAboutUs}>À Propos</li>
          <li className="navList" onClick={scrollToGroup}>Nos Services</li>
          <li className="navList" onClick={scrollToAboutUs}>Contact</li>
        </ul>
        {/* icon close navbar on small devices */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removenavbar} />
      </div>
      <div className="navbar-right">
        <button className="contactBtn" onClick={scrollToContact}>Start Now</button>
        {/* <FiShoppingCart className="cartIcon" style={{color:'yellow',fontSize:'30'}}/> */}
      </div>

      
      {/* icon open/show navbar on small devices */}
      <PiDotsNineBold className="icon menuIcon" onClick={shownavbar} />
    </div>
  );
};

export default Navbar;
