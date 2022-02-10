import React from 'react';
import '../styles/home.css';
import icono from '../assets/ICONO_Sillon.png';

const Home = () => {
  return (
    <section>
      <div className='home'>
        <h2>MARCA TU</h2>
        <h1>ESTILO PROPIO</h1>
      </div>
      <div className='about-us'>
        <figure>
          <img src={icono} alt="Icono sillon" />
        </figure>
        <div className='description'>
          <h3>Nosotros</h3>
          <p>Nos dedicamos al diseño y restauración de muebles a pedido y a
            tu gusto, para que sean únicos, irrepetibles y funcionales. <br />
            Nuestros diseños nacen de la imaginación y la pasión que
            sentimos al crearlos. Buscamos generar piezas únicas en tu
            espacio, priorizando sobre todo el confort.<br /> Trabajamos muebles 
            con espejos, con pintura glitter y con resina epóxica.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
