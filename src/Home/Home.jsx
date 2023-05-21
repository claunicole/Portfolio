import Marquee from "react-fast-marquee";
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
        <Marquee speed={20} gradient={true} gradientWidth={100}> 
          <div className='skills'>
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" className='skill-item' alt="Javascript" />
                <img src="https://raw.githubusercontent.com/maurodesouza/maurodesouza/master/assets/next-logo.svg" className='skill-item' alt="Javascript" />
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" className='skill-item' alt="React" />
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby-colored.svg" className='skill-item' alt="Ruby" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" className='skill-item' alt="Ruby on Rails" />
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"  className='skill-item' alt="HTML5" />
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" className='skill-item' alt="CSS3" />
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" className='skill-item' alt="Bootstrap" />
                <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="git" className='skill-item' ></img>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="Postgresql" className='skill-item' ></img>
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" alt="Mysql" className='skill-item' ></img>
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" alt="sass" className='skill-item' ></img>
                <img src="https://camo.githubusercontent.com/e783b842ab8da58e52841fc8fb53ebb1a864dc3dfb2dc530c7fcd2dab1b22226/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f72656469732d6f726967696e616c2d776f72646d61726b2e737667" alt="Redis" className='skill-item' ></img>
                <img src="https://camo.githubusercontent.com/e6e7e4e720421db277c77244ec2cdbc925f09ee2555a718b061f7063ed8c6799/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f66697265626173652e706e67" alt="firebase" className='skill-item' ></img>
          </div>
        </Marquee>
        <div className='button-container'></div>
        <Link to='/contact'><button className='button'>Contáctame</button></Link>
      </div>
      </div>
      )}

      export default Home
