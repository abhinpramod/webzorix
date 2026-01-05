import React from 'react';
import Hero from "./hero";
import Services from './services';
import Work from "./work"
import About from './about';
import Contact from './contact';
import Footer from './footer';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Work/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home
