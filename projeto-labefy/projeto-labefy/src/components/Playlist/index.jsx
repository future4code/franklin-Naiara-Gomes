import React, { useState } from "react";
import {Container, Section, But, Preenc} from "./Styles"
import axios from "axios";
import { FiTrash2 } from 'react-icons/fi';


function Playlist ({ musicas=[], id }) {

  const [nome,setNome] = useState([])
  const [artista,setArtista] = useState([])
  const [url, setUrl] = useState ([])

  const adicionaMusica = () => {
    //axios.get(URL, config_da_requisição{})
    //.then é executado tão logo a aplicação receba o resultado do axios.get
    // isso é possível por que axios.get retorna uma PROMISE, que funciona de maneira assíncrona.
    //.catch é o caso de erro, o que o código deve executar caso não haja sucesso na requisição
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {name:nome, artist:artista, url:url}, {
      headers: {
        Authorization: "naiara-gomes-franklin"
      }
    }).then((response) => {
      // setMusicas(response.data.result.tracks)
      console.log (response.data)
    }).catch((error) => { console.log(error.code) })
  }


  

  const deletarMusica = (idTrack) => {
    //axios.get(URL, config_da_requisição{})
    //.then é executado tão logo a aplicação receba o resultado do axios.get
    // isso é possível por que axios.get retorna uma PROMISE, que funciona de maneira assíncrona.
    //.catch é o caso de erro, o que o código deve executar caso não haja sucesso na requisição
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/${idTrack}`, {
      headers: {
        Authorization: "naiara-gomes-franklin"
      }
    }).then((response) => {
      
      console.log (response.data.result.list)
    }).catch((error) => { console.log(error.code) })
  }


return (
<Container>
    {musicas?
     
        <>
        
        {musicas.map(musica=> (
          <Section>
            <p key={musica.id}>{musica.name}</p>
            <button onClick={()=>deletarMusica(musica.id)} type="submit">
                <FiTrash2 size={13} />
            </button>
          </Section>
        ))}
        
        <Preenc>
        <input placeholder="Nome" value={nome} onChange={(event)=> setNome(event.target.value)}/> 
        <input placeholder="Artista" value={artista} onChange={(event)=> setArtista(event.target.value)}/> 
        <input placeholder="Url" value={url} onChange={(event)=> setUrl(event.target.value)}/>
        </Preenc>
        <But>
        <button onClick={()=>adicionaMusica()} type="submit">Adicionar música</button>
        </But>
        </>
        
      :
      null
    }
</Container>

)
}

export default Playlist;