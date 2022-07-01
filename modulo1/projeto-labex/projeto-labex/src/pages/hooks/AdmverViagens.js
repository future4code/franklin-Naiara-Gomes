import { useState, useEffect } from "react";
import axios from "axios";
//ainda não estou chamando esse código em nenhum lugar
function AdmverViagem (){
    const [verViagem, setVerViagem] = useState([])
    const getTrips = () => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/naiara-gomes-franklin/trips')
      .then((response) => {
      setVerViagem(response.data.trips)
     })
    }
    useEffect(getTrips, [])
    return verViagem
    }
    export default AdmverViagem