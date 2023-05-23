import { Link } from "react-router-dom"

function NavLinks({mobile, desktop}) {
  return (
    <>
         <div className={desktop} id={mobile}>
            <li className='item'>
              <Link to='/about'>Sobre Mí</Link>
            </li>
            <li className='item'>
              <Link to='/services'>Servicios</Link>
            </li>
            <li className='item'>
              <Link to='/projects'>Proyectos</Link>
            </li>
            <li className='item'>
              <Link to='/contact'>Contáctame</Link>
            </li>
            </div>
    </>
  )
}
export default NavLinks
