import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar} from './styled'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import {goToRecipesList,goToLogin} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate
  return (
   
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cokenu</Button>
          <Button onClick={goToLogin} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
   
  );
}

export default Header;