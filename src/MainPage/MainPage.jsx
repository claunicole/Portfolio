import About from "../About/About"
import Contact from "../Contact/Contact"
import Home from "../Home/Home"
import Projects from "../Projects/Projects"
import Services from "../Services/Services"

function MainPage() {
  return (
    <div className="main-page">
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
      </div>
      )}

      export default MainPage
