import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import Presentacion from './Presentacion';
import Contador from './Contador';
import Tareas from './Tareas';
import Formulario from './Fomulario';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    <Presentacion />
    <Contador />
    <Tareas />
    <Formulario />
  </React.StrictMode>
);

reportWebVitals();
