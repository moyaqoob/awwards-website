import React from 'react';
import Navbar from '@/Components/Navbar.jsx';
import Hero from '@/Components/Hero.jsx';
import Section from '@/Components/Section.jsx';
import Features from '@/Components/Features.jsx';
import Story from '@/Components/Story.jsx';
import Contact from '@/Components/Contact.jsx'
import Footer from '@/Components/Footer.jsx';

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
