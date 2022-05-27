import React from 'react';
import styled from 'styled-components';

const CardGrandeD = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid blue;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const CardGrandeI = styled.img`
width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`


function CardGrande(props) {
    return (
        <CardGrandeD>
            <CardGrandeI src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </CardGrandeD>
    )
}

export default CardGrande;