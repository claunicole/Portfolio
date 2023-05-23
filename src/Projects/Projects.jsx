
import {projects} from '../data/data'
import ProjectsIcons from '../ProjectsIcons/ProjectsIcons'
import './Projects.css'



function Projects() {

/* const [info, setInfo] = useState(false)

const showInfo = () => setInfo(!info)
 */

/* const Show = () => {

  return (
    <>
    {!info ?
      <div className='view-info'>
      <FontAwesomeIcon icon={faAnglesRight} size="2x" onClick={showInfo} ></FontAwesomeIcon>
      <p>Ver más</p>
      </div>
     : 
     <div className='view-info'>
     <FontAwesomeIcon icon={faAnglesLeft} size="2x" onClick={showInfo} ></FontAwesomeIcon>
     <p>Ver menos</p>
     </div>
     }
    </>
  )
} */



  return (
    <div className="projects">
        <h2>Proyectos</h2>
        <div className='projects-row'>
          {projects.map((project) => (
            <div id={project.id}>
             <div className='project-container'>
                <div> 
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p>Tecnologias: {project.skills}</p>
                </div>
                <a className="item-project" href={project.link} style={{backgroundImage: `url(${project.img})`}}>
                </a>
                <div className='item-info'>
                  <ProjectsIcons github={project.github} link={project.link}/>
                </div>
              </div> 
            </div> 
            ))}
    </div>
    </div>)}

          export default Projects


         {/*  <div className={!info1 ? 'item-project-container' : 'item-show'}>
          
          
      
        <Show state={showInfo2}/>
        <Show state={showInfo3}/>
    </div> */}
  
