import styled from 'styled-components'

export const SSectionFilmes = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;
    width: 85%;
    margin: 0 auto;
    justify-content: center;
`

export const SBoxFilme = styled.button`
    width: 150px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    border: none;
    cursor: pointer;
`

export const SCartaz = styled.img`
    width: 100%;
`

export const SNomeFilme = styled.span`
    font-weight: bold;
    text-align: left;
    font-size: .9rem;
    margin: 3px 0;
`

export const SDataLancamento = styled.span`
    text-transform: uppercase;
    text-align: left;
    font-size: .9rem;
`

export const SBox = styled.section`
    background-color: #2d0c5d;
    min-height: 15rem;
    color: #fff;
    padding: 2rem;
`

export const STitulo = styled.div`
    font-size: 3rem;
    text-align: center;
    font-weight: bold;
    width: 60%;
    margin: 0 auto;
`

export const SFiltros = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 3rem;
`

export const SFiltrosLabel = styled.span`
    text-align: center;
    width: 100%;
    display: block;
`

export const SGeneroBtn = styled.button`
    background-color: ##fff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #dedede;
    cursor: pointer;
    margin: 3px;
    color: #222;
    font-weight: bold;
`

export const SGeneroSelecionadoBtn = styled.button`
    background-color: #d18000;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #d18000;
    cursor: pointer;
    margin: 3px;
    font-weight: bold;
`

export const SPaginacao = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`

export const SPaginacaoNumero = styled.button`
    background-color: transparent;
    border: none;
    color: #2d0c5d;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
    margin: 0 .5rem;
`

export const SPaginacaoNumeroSelecionada = styled.button`
    background-color: #2d0c5d;
    border: none;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 3px;
    margin: 0 1rem;
`


