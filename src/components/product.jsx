import React from 'react';
import '../styles/product.css';
import comoda from '../assets/IMG_Cómoda.png';
import sillon from '../assets/IMG_Sillon.png';
import mesa from '../assets/IMG_MesaRatona.png';

const Product = () => {
  return (
    <section>

      <div className='product'>
        <h2>NOVEDOSOS Y BRILLANTES</h2>
      </div>

      <div className='product-container'>
        <figure class="product-item">
          <img src={comoda} alt="" />
          <figcaption>Cómoda</figcaption>
          <span>Dormitorio</span>
        </figure>
        <figure class="product-item">
          <img src={sillon} alt="" />
          <figcaption>Silla</figcaption>
          <span>Cocina</span>
        </figure>
        <figure class="product-item">
          <img src={mesa} alt="" />
          <figcaption>Mesa ratona</figcaption>
          <span>Living/Comedor</span>
        </figure>
      </div>
      <div className='button-container'>
        <button className='button'>VER MÁS</button>
      </div>

    </section>
  );
}

export default Product;
