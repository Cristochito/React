import React, { useState } from 'react';
import './Contador.css';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div className="contador">
      <h2>Contador: {contador}</h2>
      <div className="botones">
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    </div>
  );
};

export default Contador;

