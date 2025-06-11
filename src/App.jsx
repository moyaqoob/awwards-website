// @ts-nocheck
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Section from './Components/Section';
import Features from './Components/Features';
import Story from './Components/Story';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

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
