import { useNavigate } from "react-router-dom"
import { useLayoutEffect} from 'react'
import { goToRecipesList } from '../routes/coordinator'


// Esse hook funciona para verificar, se já tem um token, não permite voltar para tela de login
//if (token) SE TIVER TOKEN
//if (!token) SE NÃO TIVER TOKEN

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToRecipesList(navigate)
    }
  }, [navigate])
}

export default useUnprotectedPage;