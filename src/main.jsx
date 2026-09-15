import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Herramientas from './pages/Herramientas';
import Noticias from './pages/Noticias';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="/herramientas" element={<Herramientas/>}/>
          <Route path="/noticias" element={<Noticias/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
