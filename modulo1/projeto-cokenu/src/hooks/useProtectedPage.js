import { useNavigate } from "react-router-dom"
import { useLayoutEffect } from 'react'
import { goToLogin } from '../routes/coordinator'

//useprotect page serve para deixar a pessoa só entrar naquela aba se ela fez login e tem permissao
// Esse hook vai pegar o historico para caso a pessoa nao possa estar naquela pagina
// Ele mude de pagina e assim que a tela abrir ele vai fazer essa verificacao
// Pega o token do localStorage, se não existe token ele leva para a pagina de login

const useProtectedPage = () => {
    const navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goToLogin(navigate)
    }
  }, [navigate])
}

export default useProtectedPage