import { Link } from "react-router-dom"

function NavLinks({mobile, desktop}) {
  return (
    <>
         <div className={desktop} id={mobile}>
            <li className='item'>
              <Link to='/about'>Sobre Mí</Link>
            </li>
            <li className='item'>
              <Link to='/skills'>Tecnologías</Link>
            </li>
            <li className='item'>
              <Link to='/projects'>Proyectos</Link>
            </li>
            <li className='item'>
              <Link to='/contact'>Contactame</Link>
            </li>
            </div>
    </>
  )
}
export default NavLinks
