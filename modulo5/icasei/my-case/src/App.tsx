import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import FilmesLista from './pages/FilmesLista';
import FilmeDetalhes from './pages/FilmeDetalhesPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FilmesLista />}></Route>
        <Route path="/:id" element={<FilmeDetalhes />}></Route> 
      </Routes>
    </div>
  );
}

export default App;
