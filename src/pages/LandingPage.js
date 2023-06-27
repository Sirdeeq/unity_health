import React from 'react';
import Home from "../services/landingPage/Home";
import About from "../services/landingPage/About";
import Services from "../services/landingPage/Services";
import Contact from "../services/landingPage/Contactus";
import CustomScroll from "../components/custom components/defaults/CustomScroll";

export default function LandingPage() {
  return (
    <div>
      <CustomScroll>
        <Home />
        <About />
        <Services />
        <Contact />
      </CustomScroll>
    </div>
  );
}
