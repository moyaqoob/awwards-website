// @ts-nocheck
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Story from "./components/Story";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Section />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
