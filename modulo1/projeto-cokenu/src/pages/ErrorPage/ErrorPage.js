import React from "react";
import error from '../../assets/error.png'
import { ErrorImage, ErrorPageContainer } from './styled'

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error}/>
      <strong>Erro 404 - Página nao encontrada</strong>
    </ErrorPageContainer>
  );
};

export default ErrorPage;