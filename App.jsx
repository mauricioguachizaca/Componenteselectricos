import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Inicio} from "./componentes/inicio";
import {Perfil} from "./componentes/perfil";
import { Informacion } from './componentes/informacion';
import { Medidor } from './componentes/medidor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/informacion" element={<Informacion/>} />
        <Route path='/medidor' element={<Medidor/>}/>
      </Routes>
    </Router>
  );
}

export default App