import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Rules from "./components/Rules"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Navbar />
      <Hero onNavigate={handleNavigate} />
      <Skills />
      <Experience />
      <Rules />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
