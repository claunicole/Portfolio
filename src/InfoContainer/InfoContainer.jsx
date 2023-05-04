import { Link } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import './InfoContainer.css'

function InfoContainer() {
  return (
    <div className="info-container">
      <div className='info'>
        <h2 className='title-info'>Hola!</h2>
        <h2 className='title-info'>Soy Claudia,</h2>
        <h2 className='title-info'>Web Developer</h2>
        <h2 className='info-desktop'>Hola! Soy Claudia, Web Developer</h2>
        <h3 className='dev-text'>React / Ruby on Rails Dev</h3>
        <div className='button-container'></div>
        <Link to='/contact'><button className='button'>Contáctame</button></Link>
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default InfoContainer
