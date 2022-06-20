import React from "react";
import "./App.css"
import { Navbar, Hero, About, Support, AllinOne, Pricing, Footer} from "./components";


const App = () => {
  return <>
  <Navbar/>
  <Hero/>
  <About/>
  <Support/>
  <AllinOne/>
  <Pricing/>
  <Footer/>
  </>;
};

export default App;
