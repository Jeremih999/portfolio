import React from "react";
import '../App.css';
import About from '../components/About';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';


function Home() {
    return (
      <>
        <NavBar />
        <Hero />
        <About />
        <Stacks />
        <Projects />
        <Testimonial />
        <Contact />
      </>
    );
  }
  
  export default Home;
  