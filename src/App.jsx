
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hello from "./Components/Hello/Hello";
import Sponsors from "./Components/Sponsors/Sponsors";
import Popular from "./Components/Popular/Popular";
import Listing from "./Components/Listing/Listing";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import Historique from './Components/Historique/Historique';
import Lists from './Components/Lists/Listing';
import Categorie from './Components/Categorie/Listing';

function App() {

  return (
    <>
      <Navbar/>
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
