import React from "react";
import { useState } from "react";
import "./App.css";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

const App = () => {
  const [etapa, setEtapa] = useState(1);

  const irParaProximaEtapa = () => {
    setEtapa(!etapa);
  };

  const renderizaEtapa = () => {
    switch (state.evento) {
      case 1:
        return <Etapa1 aoResponder={irParaProximaEtapa} />;
      case 2:
        return <Etapa2 aoResponder={irParaProximaEtapa} />;
      case 3:
        return <Etapa3 aoResponder={irParaProximaEtapa} />;
      case 4:
        return <Final aoResponder={irParaProximaEtapa} />;
    }
  };

  return (
    <div>
      {renderizaEtapa()}
      <button onClick={irParaProximaEtapa}>Próxima etapa</button>
    </div>
  );
};

export default App;
