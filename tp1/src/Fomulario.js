import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [bienvenida, setBienvenida] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setBienvenida(`¡Bienvenido, ${nombre}!`);
  };

  return (
    <div className="formulario-simple">
      <form onSubmit={manejarEnvio}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {bienvenida && <p>{bienvenida}</p>}
    </div>
  );
};

export default Formulario;
