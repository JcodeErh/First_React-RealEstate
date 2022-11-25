import React, {useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import HomePage from './Pages/Homepage/HomePage';
import About from './Pages/About Us/About';
import Services from './Pages/Our Services/Services';
import ContactUs from './Pages/Contact/ContactUs';
import Footer from './Components/Footer';
import ObjectPage from './Pages/Homes/Homes';
import data from "./data/objects.json";
import Blogg from './Pages/Blog/Blogg';
import ObjectsForSale from './Pages/Homes/HomesForSale';


function App() {

  const [objects, setObjects] = useState([]);
  useEffect(() => {
    setObjects(
      data.objects.map((object) => {
        return { ...object, id: uuidv4() };
      })
    );
  }, []);

  

  return (
    <BrowserRouter>
     
      <main id="main" className="container-fluid main pt-3">
      <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/Homes"
            element={<ObjectsForSale objects={objects} />}
          />
          <Route
            path="Homes/:id"
            element={<ObjectPage objects={objects} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blogg />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

  
  
  
  
  
  
  
  
 