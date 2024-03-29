import React from "react";
import {ScreenContainer, LogoImage, SignUpButtonContainer} from "./styled"
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core"
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom"
import {goToSignUp} from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({setRightButtonText}) => {
  useUnprotectedPage()
const navigate = useNavigate() 
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm setRightButtonText={setRightButtonText}/>
      <SignUpButtonContainer>
      <Button
        onClick={() => goToSignUp(navigate)}
        type={"submit"}
        fullWidth
        variant={"text"}
        color={"primary"}
        >
          Não possui conta? Cadastre-se!
        </Button>
      </SignUpButtonContainer>
      
    </ScreenContainer>

  );
};

export default LoginPage;
