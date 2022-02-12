import React, { useState } from "react";
import '../styles/form.css';
import axios from "axios";
import stateList from '../states-data.js';

const scheduleOptions = [
  '',
  '10:00 - 12:00',
  '12:00 - 15:00',
  '15:00 - 19:00'
 ];

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ';

const Form = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    provincia: "",
    number: "",
    consulta: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
     ...state
    };
    axios.post("https://sistemacaliva.com/api/front-test", userData, {headers: { 'test-key': TOKEN, }})
    .then((response) => {
      alert("Mensaje enviado con exito");
    })
    .catch(error => {
      alert("Ooops, hubo un error interno");
    });
  };

  return (
    <div className='form-container'>
      <h4>Formulario</h4>
      <form onSubmit={handleSubmit}>

        <label htmlFor="nombre">Nombre
          <input className="form-input" type="text" name="name" value={state.name}
            onChange={handleChange}/>
        </label>

        <label htmlFor="provincia">Provincia
          <select className="form-input" name="provincia" value={state.provincia} onChange={handleChange}> 
            {stateList.map((option) => (<option value={option} key={option} >{option}</option>))}
          </select>
        </label>

        <label htmlFor="email">E-mail
          <input className="form-input" type="email" name="email" value={state.email}
            onChange={handleChange}/>
        </label>

        <label htmlFor="horario">Horario de contacto
          <select className="form-input" name="horario" value={state.horario} onChange={handleChange}>
            {scheduleOptions.map((option) => (<option value={option} key={option} >{option}</option>))}
          </select>
        </label>

        <label htmlFor="telefono">Teléfono
          <input className="form-input" type="text" name="number" value={state.number}
            onChange={handleChange}/>
        </label>

        <label htmlFor="consulta">Consulta
          <input className="form-input" type="text" name="consulta" value={state.consulta}
            onChange={handleChange}/>
        </label>

        <div className="btn">
          <button type="submit">Enviar</button>
        </div>
        
      </form>
    </div>
  );
}

export default Form;
