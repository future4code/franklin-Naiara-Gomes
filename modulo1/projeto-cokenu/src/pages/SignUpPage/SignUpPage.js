import React from "react";
import {ScreenContainer} from "./styled"
import { LogoImage } from './styled'
import logo from "../../assets/logo.png"
import SignUpForm from "./SignUpForm";
import useProtectedPage from "../../hooks/useProtectedPage";
//import { Button } from "@material-ui/core"
//import { useNavigate } from "react-router-dom"
//import {goToSignUp} from "../../routes/coordinator"


const SignUpPage = ({setRightButtonText}) => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm setRightButtonText={setRightButtonText}/>   
    </ScreenContainer>

  );
};

export default SignUpPage;
  