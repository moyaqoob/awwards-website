import React from "react";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Section from "./Components/section";
import Story from "./Components/Story";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact"

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
