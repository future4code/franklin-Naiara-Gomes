import React, {useState} from "react";
import {Container} from "./Styles"
import { FiTrash2 } from 'react-icons/fi';
import axios from "axios";
import Playlist from "../Playlist";
function Card ({ imagem, nome, id }){
  const [musicas, setMusicas] = useState([])
  const buscarPlaylist = () => {
    //axios.get(URL, config_da_requisição{})
    //.then é executado tão logo a aplicação receba o resultado do axios.get
    // isso é possível por que axios.get retorna uma PROMISE, que funciona de maneira assíncrona.
    //.catch é o caso de erro, o que o código deve executar caso não haja sucesso na requisição
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
      headers: {
        Authorization: "naiara-gomes-franklin"
      }
    }).then((response) => {
      setMusicas(response.data.result.tracks)
      console.log (response.data)
    }).catch((error) => { console.log(error.code) })
  }
  const deletarPlaylist = () => {
    //axios.get(URL, config_da_requisição{})
    //.then é executado tão logo a aplicação receba o resultado do axios.get
    // isso é possível por que axios.get retorna uma PROMISE, que funciona de maneira assíncrona.
    //.catch é o caso de erro, o que o código deve executar caso não haja sucesso na requisição
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
      headers: {
        Authorization: "naiara-gomes-franklin"
      }
    }).then((response) => {
      console.log (response.data.result.list)
    }).catch((error) => { console.log(error.code) })
  }
return (
<Container>
            <img src={imagem} alt="Disco" />
            <p>{nome}</p>
            <section>
            <button onClick={()=>deletarPlaylist()} type="submit">
              Deletar  <FiTrash2 size={13} />
            </button>
            <button onClick={()=>buscarPlaylist()} type="submit">
              Ver musicas  <FiTrash2 size={13} />
            </button>
            </section>
            <Playlist musicas={musicas} id={id} />
</Container>
)
}
export default Card;