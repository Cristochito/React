import React, { useState } from 'react';
import './Tareas.css';

const Tareas = () => {

  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;
    setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
    setNuevaTarea(''); // Limpiar el input
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div className="lista-de-tareas">
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            onClick={() => toggleCompletada(index)}
            className={tarea.completada ? 'completada' : ''}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tareas;
