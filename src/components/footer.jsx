import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <section>
      <div className='contact-us'>
        <div className='form-container'>
          <h4>Formulario</h4>
        </div>
        <div className='contac-container'>
          <h4>Contacto</h4>
          <p>0800-000-0000 <br /> 11-00000000 <br /> Lorem ipsum 555 </p>
        </div>
        <div className='horarios-container'>
          <h4>Horarios</h4>
          <p>Lunes a Viernes <br /> 10:00 - 19:00 hs.</p>
        </div>
      </div>
      <div className='rights'>
        <p>Todos los derechos reservados</p>
      </div>
    </section>
  );
}

export default Footer;
