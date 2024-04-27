
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hello from "./Components/Hello/Hello";
import Sponsors from "./Components/Sponsors/Sponsors";

// import Contact from "./Components/Contact/Contact";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

import Lists from './Components/Lists/Listing';
import Categorie from './Components/Categorie/Listing';
import CartIcon from './Components/Card/Cardicon';

function App() {

  return (
    <>
      <Navbar/>
      <CartIcon />
      <Hello/>
      <Sponsors/>
       {/* <Popular/>  */}
       {/* <Historique/> */}
       {/* <Listing/> */}
       <Lists/>
      {/* <About/>
       <Contact/> */}
      <Subscribe/> 
      <Categorie/>
      <Footer/>
    </>
  )
}

export default App
