import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaTareas from './components/ListaTareas';
import DetalleTarea from './components/DetalleTarea';
import FormTarea from './components/FormTarea';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaTareas />} />
        <Route path="/task/:id" element={<DetalleTarea />} />
        <Route path="/create" element={<FormTarea />} />
      </Routes>
    </Router>
  );
};

export default App;