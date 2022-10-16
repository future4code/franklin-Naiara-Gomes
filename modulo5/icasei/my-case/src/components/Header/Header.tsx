import React from 'react';
import {SHeader, SLogo} from './StylesHeader'
import logo from '../../assets/Vector.png';

const Header: React.FC = () => {
    return (
        <SHeader>
            <SLogo src={logo} alt="Logo imdb" />
        </SHeader>
    )
}

export default Header;

