import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rules from "./components/Rules";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#0a0a0c", color: "#f0f0f3", minHeight: "100vh" }}>
      <Navbar />
      <Hero onNavigate={navigate} />
      <Rules />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
