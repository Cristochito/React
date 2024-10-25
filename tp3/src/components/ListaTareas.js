import React from 'react';
import { Link } from 'react-router-dom';
import ItemTarea from './ItemTarea';
import tareas from '../data/Tareas';

const ListaTareas = () => {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Link to="/create">Crear Nueva Tarea</Link>
      <ul>
        {tareas.map(task => (
          <ItemTarea key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;