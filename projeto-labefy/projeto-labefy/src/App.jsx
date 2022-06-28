import axios from "axios";
import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";



const App = () => {
  const [playlists, setPlaylists] = useState([])
  const [inputPlaylist, setInputPlaylist] = useState('')
  

  //Essa função pega uma playlist a partir de uma requisição
  const pegaPlaylist = () => {
    //axios.get(URL, config_da_requisição{})
    //.then é executado tão logo a aplicação receba o resultado do axios.get
    // isso é possível por que axios.get retorna uma PROMISE, que funciona de maneira assíncrona.
    //.catch é o caso de erro, o que o código deve executar caso não haja sucesso na requisição
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: "naiara-gomes-franklin"
      }
    }).then((response) => {
      setPlaylists(response.data.result.list)
    }).catch((error) => { console.log(error.code) })
  }


  //Essa função cria uma playlist a partir de uma requisição
  //A diferença entre o pega a playlist e o cria é que essa requisição é um post e exige um body
  //lembrando que essa implementação depende de como está especificado na documentação da API
  const criaPlaylist = () => {

    const body = {
      name: inputPlaylist
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: "naiara-gomes-franklin"
      }
    }).then((response) => {
      pegaPlaylist()
    }).catch((error => {
      console.log(error)
    }))
  }

  //o handleInputNome é necessário para associar o input onde será digitado o nome da API a uma variável de estado
  const handleInputNome = (event) => {
    setInputPlaylist(event.target.value)
  }

  //O useEffect permite com que façamos o pegaPLaylist tão logo o componente App esteja pronto 
  //para ser renderizado e que isso só acontença novamente caso haja uma modificação nesse componente.
  useEffect(()=>{
    pegaPlaylist();
},[])

  return (
    <div className="Container">
      <Sidebar />
      <div className="Itens">
        <p>Sua playlist </p>
        <div className="Playlists" >
          
         {playlists.map((playlist) => {
        return (
          <div>
          <Card imagem="https://img-21.ccm2.net/RGfQ0-yCvJ9bNZ5F1pVCji9Qn5U=/500x/53844c617d714cdca056ba0da4244f51/ccm-faq/123rf_donets.jpg"
          nome={playlist.name}
          id={playlist.id}
          key={playlist.id}
          
          />
          
          </div>
        )
      })}
        </div>
        <div className="Criarformulario">
          <label>Cadastrar nova playlist</label>
          
          <input value={inputPlaylist} onChange={handleInputNome} />
          <button className="myButton" onClick={()=>criaPlaylist()} type="submit">Cadastrar</button>
        </div>
        

      </div>
    </div>
  );
}

export default App;