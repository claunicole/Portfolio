import './Services.css'

function Services() {
  return (
    <div className='services-container'>
      <h2 className='service-title'>Servicios</h2>
        < div className='services'>
          <div className='service-card'>
            <img className='img-service' src='/landing.png' alt="a"/>
            <div className='service-info'>
              <h3 className='service-title'>Landing Page</h3>
              <h4 className='service-title'>100 usd</h4>
              <p>Sitio informativo, incluye inicio, sobre nosotros, servicios e implementacion de contacto por mail y/o whatsapp</p>
              <p>Puede incluir imagenes y/o videos</p>
              <p>Tiempo de entrega: 1 a 2 semanas</p>
              <p>Hosting y dominio incluidos**</p>
            </div>
              <button>Me interesa</button>
          </div>
          <div className='service-card'>
            <img className='img-service' src='/ecommerce.png' alt="a"/>
            <div className='service-info'>
              <h3 className='service-title'>Ecommerce con Jumpseller</h3>
              <h4 className='service-title'>150usd</h4>
              <p>Diseño y maquetación, agregar productos, implementación de metodos de pago, metodos de envio, redes sociales y capacitacion para autoadministrar el sitio</p>
              <p>Tiempo de entrega: 2 a 4 semanas</p>
              <p>Hosting y dominio <strong>NO</strong> incluidos**</p>
              </div>
              <button>Me interesa</button>
          </div>
          <div className='service-card'>
            <img className='img-service' src='/coding.png' alt="a"/>  
            <div className='service-info'>
              <h3 className='service-title'>Aplicaciones Web</h3>
              <h4 className='service-title'>Valores según cotización</h4>
              <p>Aplicación realizada desde cero y a la medida </p>
            </div>   
            <button>Me interesa</button>
          </div>
      </div>
    </div>
  )
}
export default Services
