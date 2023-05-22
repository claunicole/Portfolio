import './About.css'

function About() {
  return (
    <div>
      <div className="about-container">
        <h2>Sobre mí</h2>
        <div className='info-profile'>
          <img className='img-profile' src='/dev-code.png' alt="a" width={585} height={390}/>
          <div className='about-text-container'>
            <p>Desarrolladora Web con conocimiento en JavaScript, React, Next.js y Ruby on Rails.</p>
            <p>Apasionada por la tecnología, por el continuo aprendizaje, en búsqueda de retos y nuevas oportunidades.</p>
            <p>Actualmente trabajando en Código Facilito como Desarrolladora Ruby on Rails.</p>
            <p>También mentora en BrightCoders, apoyando a participantes de los programas intensivos de Brightcoders a desarrollar aplicaciones buenas prácticas, mejorando sus habilidades técnicas y utilizando de forma continua tecnologías como Git y Github</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
