import React from 'react';
import '../styles/footer.css';
import phone from '../assets/phone.png';
import whatsapp from '../assets/whatsapp.png';
import location from '../assets/location.png';

const Footer = () => {
  return (
    <section>
      <div className='contact-us'>
        <div className='form-container'>
          <h4>Formulario</h4>
        </div>
        <div className='contact-container'>
          <h4>Contacto</h4>
          <div className='contact-display'>
            <div>
              <img src={phone} alt="Phone"/>
              <p>0800-000-0000</p>
            </div>
            <div>
              <img src={whatsapp} alt="whatsapp"/>
              <p>11-00000000</p>
            </div>
            <div>
              <img src={location} alt="location"/>
              <p>Lorem ipsum 555</p>
            </div>
          </div>
        </div>
        <div className='horarios-container'>
          <h4>Horarios</h4>
          <div>
            <p>Lunes a Viernes</p>
            <p>10:00 - 19:00 hs.</p>
          </div>
          
        </div>
      </div>
      <div className='rights'>
        <p>Todos los derechos reservados</p>
      </div>
    </section>
  );
}

export default Footer;
