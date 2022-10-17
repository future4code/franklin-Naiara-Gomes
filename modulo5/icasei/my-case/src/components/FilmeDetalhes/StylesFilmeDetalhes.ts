import styled from 'styled-components';

export const SMainPage = styled.main`
    background-color: #F3F3F3;
`

export const SBox = styled.section`
    background-color: #2d0c5d;
    height: 25rem;
    color: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
        height: auto;
        flex-direction: column;
    }
`

export const SImgPoster = styled.img`
    width: 350px;
    border-radius: 5px;
`

export const SBoxEquipe = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const SCardEquipe = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem .5rem .5rem 0;
    min-width: 25%;
`

export const SFlexBoxColumn = styled.section`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1rem;

    @media only screen and (max-width: 768px) {
        margin-top: 1rem !important;
    }
`
export const SMainTitle = styled.span`
    font-size: 2rem; 
    font-weight: bold;
`
export const SSubtitle = styled.span`
    font-weight: bold;
    margin: .8rem 0;
    font-size: 1.5rem;
`

export const SFlexBox= styled.div`
    display: flex;
    overflow-x: auto;
`

export const SFlexCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: .2rem;
    padding: .5rem;
    border: 1px solid #ccc;
    background-color: #fff;
`

export const SCardImage = styled.img`
    max-width: 150px;
`
export const SCardTitle = styled.span`
    font-weight: bold;
    margin: .2rem 0;
`
