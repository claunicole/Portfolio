import './Skills.css'

function Skills() {
  return (
    <div className="skills-container">
        <h2>Tecnologías</h2>
        <div className='skill-info'>
          <div className='skills'>
              <p>JavaScript</p>
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" className='skill-item' alt="Javascript" />
          </div>
          <div className='skills'>
              <p>React</p>
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" className='skill-item' alt="React" />
          </div>  
          <div className='skills'>
              <p>Ruby</p>
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby-colored.svg" className='skill-item' alt="Ruby" />
          </div>
          <div className='skills'>
              <p>Rails</p>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" className='skill-item' alt="Ruby on Rails" />
          </div>
          <div className='skills'>
              <p>HTML</p>
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"  className='skill-item' alt="HTML5" />
          </div>
          <div className='skills'>
              <p>CSS</p>
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" className='skill-item' alt="CSS3" />
          </div>
          <div className='skills'>
              <p>Bootstrap</p>
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" className='skill-item' alt="Bootstrap" />
          </div>
          <div className='skills'>
              <p>Git</p>
                <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="git" className='skill-item' ></img>
        </div>
        <div className='skills'>
              <p>PostgreSQL</p>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="Postgresql" className='skill-item' ></img>
        </div>
        </div>
    </div>
  )
}

export default Skills
