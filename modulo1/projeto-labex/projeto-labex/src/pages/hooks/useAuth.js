import { useState, useEffect } from "react";
import axios from "axios";
//função feita para fazer uma requisição de Login batendo na API e retornando
function useAuth (){
    const [auth, setAuth] = useState([])
    const getTrips = () => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/naiara-gomes-franklin/trips')
      .then((response) => {
      setAuth(response.data.trips)
     })
    }
    useEffect(getTrips, [])
    return auth
    }
    export default useAuth