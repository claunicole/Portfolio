import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom'
import './Services.css'
import landingImg from '/landing.png'
import ecommerceImg from '/ecommerce.png'
import codingImg from '/coding.png'

function Services() {
  return (
    <div className='services-container'>
      <h2 className='service-title'>Servicios</h2>
        < div className='services'>
          <div className='service-card'>
            <div className='service-info'>
              <div>
                <LazyLoadImage className='img-service' alt='landing image' src={landingImg} effect='blur' />
              </div>
              <h3 className='service-title'>Landing Page</h3>
              <h4 className='service-title'>100 usd</h4>
              <p>Sitio informativo, incluye inicio, sobre nosotros, servicios e implementacion de contacto por mail y/o whatsapp.</p>
              <p>Puede incluir imagenes y/o videos.</p>
              <p>Tiempo de entrega: 1 a 2 semanas.</p>
              <p>Hosting y dominio incluidos**</p>
            </div>
            <Link to='/contact'><button>Me interesa</button></Link>
          </div>
          <div className='service-card'>
            <div className='service-info'>
              <div>
                <LazyLoadImage className='img-service' alt='ecommerce image' src={ecommerceImg} effect='blur' />
              </div>
              <h3 className='service-title'>Ecommerce con Jumpseller</h3>
              <h4 className='service-title'>150usd</h4>
              <p>Diseño y maquetación, agregar productos, implementación de metodos de pago, metodos de envio, redes sociales y capacitacion para autoadministrar el sitio.</p>
              <p>Tiempo de entrega: 2 a 4 semanas.</p>
              <p>Hosting y dominio <strong>NO</strong> incluidos**</p>
              </div>
            <Link to='/contact'><button>Me interesa</button></Link>
          </div>
          <div className='service-card'>
            <div className='service-info'>
             {/*  <div>
                <LazyLoadImage className='img-service' alt='coding image' src={codingImg} effect='blur' />
              </div> */}
              <h3 className='service-title'>Aplicaciones Web</h3>
              <h4 className='service-title'>Valores según cotización</h4>
              <p>Aplicación desarrollada a medida.</p>
              <p>Diseñada y programada desde cero.</p>
            </div>   
            <Link to='/contact'><button>Me interesa</button></Link>
          </div>
      </div>
    </div>
  )
}
export default Services
