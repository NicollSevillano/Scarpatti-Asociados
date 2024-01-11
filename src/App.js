import React from "react";
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Main/Carousel';
import Main from './Components/Main/Main';
import Cards from './Components/Main/Cards';
import Slider from './Components/Main/Slider';
import Capacitaciones from './Components/Capacitaciones/Capacitaciones';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path={"/"} />
        <Route path={"/consultora"} />
        <Route path={"/"} />
        <Route path={"/"} />
      </Routes>
      <Carousel />
      <Main />
      <Cards />
      <Slider />
      <Capacitaciones />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
