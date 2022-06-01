import React from 'react';
import styled from 'styled-components';

const CardPequenoAn = styled.div`
   display: flex;
    align-items: center;
    border: 1px solid blue;
    border-none: 50px;
    width: 540px;
    padding: 15px 30px;
    margin: 10px auto;
`
const CardPequenoImg = styled.img`
    width: 30px;
    margin-right: 10px;
`
function CardPequeno (props) {
return (
    <CardPequenoAn>
    <CardPequenoImg src={ props.imagem }/>
    <p>{ props.texto }</p>
</CardPequenoAn>

)
}

export default CardPequeno;