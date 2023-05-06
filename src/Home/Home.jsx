import { Link } from "react-router-dom"
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className='info'>
        <h2 className='title-info'>Hola!</h2>
        <h2 className='title-info'>Soy Claudia,</h2>
        <h2 className='title-info'>Web Developer</h2>
        <h2 className='info-desktop'>Hola! Soy Claudia, Web Developer</h2>
        <h3 className='dev-text'>React / Ruby on Rails Dev</h3>
        <div className='button-container'></div>
        <Link to='/contact'><button className='button'>Contáctame</button></Link>
      </div>
      </div>
      )}

      export default Home
