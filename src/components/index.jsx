// @ts-nocheck
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Section from "./Section";
import Story from "./Story";

const AllPages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
};

export default AllPages;
