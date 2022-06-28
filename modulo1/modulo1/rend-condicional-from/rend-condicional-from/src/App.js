import React from "react";
import { useState } from "react";
import "./App.css";
import {Etapa1} from "./components/Etapa1";
import {Etapa2} from "./components/Etapa2";
import {Etapa3} from "./components/Etapa3";
import {Final} from "./components/Final";
import styled from 'styled-components'




const App = () => {
  const [etapa, setEtapa] = useState(1);

  const irParaProximaEtapa = () => {
    setEtapa(!etapa)
     if (etapa) {
       setEtapa(etapa + 1)
     }
  };

  const renderizaEtapa = () => {
    switch (etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  };

  return (
    <div className="App">
      {renderizaEtapa()}
      <button onClick={irParaProximaEtapa}>Próxima etapa</button>
    </div>
  );
};

export default App;
