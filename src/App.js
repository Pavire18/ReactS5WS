import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import CustomHome from './components/CustomHome/CustomHome';
import Header from './components/Header/Header';
import NoticiasHome from './components/NoticiasHome/NoticiasHome';
import Noticias from './components/Noticias/Noticias';

const NotFound = React.lazy(() => import("./components/NotFound"));


function App() {
  return (

      <div className="App">
      
      <BrowserRouter>
      <Header></Header>
      {/* RUTAS */}
      <Routes>
            {/* Rutas cargadas normal (no lazy) */}
            <Route path='/' element={<CustomHome></CustomHome>}></Route>

            {/* Rutas cargadas de forma lazy */}
            <Route path='/noticias' element={<React.Suspense fallback={<p>Cargando...</p>}> <NoticiasHome></NoticiasHome> </React.Suspense>}></Route>
            <Route path='/noticias/:id' element={<React.Suspense fallback={<p>Cargando...</p>}> <Noticias></Noticias></React.Suspense>}></Route>

            {/* Paginas no encontradas */}
            <Route path="*" element={<React.Suspense fallback={<p>Cargando...</p>}> <NotFound></NotFound> </React.Suspense>}></Route>
          </Routes>

          </BrowserRouter>
      </div>

  );
}

export default App;
