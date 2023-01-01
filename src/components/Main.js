import React from "react";
import About from "./section/About";
import Home from "./section/Home";
import Skills from "./section/Skills";
import Work from "./section/Work";
import Services from "./section/Services";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";

function Main() {
  return (
    <main class="main">
      {/* HOME */}
      <Home />
      {/* ABOUT */}
      <About />
      {/* SKILLS */}
      <Skills />

      {/* SERVICES */}
      <Services />

      {/* WORK */}
      <Work />

      {/* TESTIMONIALS */}

      <Testimonials />
      {/* CONTACT */}
      <Contact />
    </main>
  );
}

export default Main;
