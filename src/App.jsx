
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Section from "./Components/section";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Section/>
    </main>
  );
}

export default App;
