import About from "../About/About"
import Contact from "../Contact/Contact"
import Home from "../Home/Home"
import Projects from "../Projects/Projects"
import Skills from "../Skills/Skills"

function MainPage() {
  return (
    <div className="main-page">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
      )}

      export default MainPage
