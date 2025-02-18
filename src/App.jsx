import React from 'react';
import Features from './Components/Features.jsx';
import Hero from './Components/Hero.jsx';
import Navbar from './Components/Navbar.jsx';
import Section from './Components/Section.jsx';
import Story from './Components/Story.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx'

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Section/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
