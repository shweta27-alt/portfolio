import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative overflow-x-hidden text-neutral-900 antialiased selection:bg-fuchsia-600 selection:text-cyan-100 min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_20%,#fff_38%,#63e_100%)]"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies/>
        <Experience/>
        <Project/>
        <About />
        <Contact/>
      </div>
    </div>
  );
}

export default App;

