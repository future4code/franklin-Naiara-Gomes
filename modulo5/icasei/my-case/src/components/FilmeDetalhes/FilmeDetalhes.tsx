import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getElenco, getFilmePorId, getFilmesSimilares, getTrailer } from '../../services/api';
import { formataData } from '../../sharedFunctions';
import { 
    SBox, 
    SFlexCard,
    SCardImage,
    SCardTitle, 
    SMainPage, 
    SBoxEquipe, 
    SCardEquipe, 
    SImgPoster,
    SFlexBoxColumn,
    SFlexBox,
    SMainTitle,
    SSubtitle} from './StylesFilmeDetalhes'

interface iFilme {
    genres: {id: number, name: string}[]
    id: number
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    runtime: number;
    title: string;
    video: boolean;
}

interface iEquipe{
    id: number;
    job: string;
    name: string;
}

interface iElenco{
    id: number;
    character: string;
    name: string;
    profile_path: string;
}
const FilmeDetalhes: React.FC = () => {

    const BASE_IMG = 'https://image.tmdb.org/t/p/original'
    const params = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = React.useState<iFilme | null>(null);
    const [equipe, setEquipe] = React.useState<iEquipe[]>([])
    const [elenco, setElenco] = React.useState<iElenco[]>([]);
    const [recomendacoes, setRecomentacoes] = React.useState<iFilme[]>([]);
    const [trailerKey, setTrailerKey] = React.useState<string | null>(null);

    const getFilmeSelecionado = (id: number) => {
        getFilmePorId(id).then(res => {
            setFilme(res.data)
        })
    }

    const buscaElenco = (id: number) => {
        getElenco(id).then(res => {
            setElenco(res.data.cast)
            const FILTRO_FUNCAO_EQUIPE = ['Writer', 'Director', 'Editor', 'Original Music Composer', 'Casting']
            const crew = res.data.crew.filter((c: iEquipe) => FILTRO_FUNCAO_EQUIPE.includes(c.job))
            setEquipe(crew.splice(0, 9)) // limita a 9 informações na tela
        })
    }

    const buscaFilmesSimilares = (id: number) => {
        getFilmesSimilares(id).then(res => {
            setRecomentacoes(res.data.results)
        })
    }

    const buscaTrailer = (id: number) => {
        getTrailer(id).then(res => {
            setTrailerKey(res.data.results.length && res.data.results[0].key)
        })
    }

    const calcDuracao = (runtime: number) => {
        const minutes = runtime % 60;
        const hours = Math.floor(runtime / 60);
        return `${hours}h ${minutes}m`
    }

    /**
     * Navega para tela de detalhes do filme a partir de filme selecionado
     * @param filme : filme selecionado
     */
     const handleClickFilmeNavigation = (filme: iFilme) => {
        navigate(`/${filme.id}`);
    }

    React.useEffect(() => {
        getFilmeSelecionado(Number(params['id']))
        buscaElenco(Number(params['id']));
        buscaFilmesSimilares(Number(params['id']));
        buscaTrailer(Number(params['id']));
    }, [params]);

    return (
        <SMainPage>
            <SBox>
                <div>
                    <SImgPoster src={`${BASE_IMG}${filme?.poster_path}`} alt="Poster"/>
                </div>
                <SFlexBoxColumn>
                    <SMainTitle>{filme?.title} ({filme?.release_date.split('-')[0]})</SMainTitle>
                    <div>
                        {formataData(filme?.release_date) } - {filme?.genres?.map(genre => genre.name).join(' - ')} - {calcDuracao(filme?.runtime || 0)}
                    </div>
                    <SSubtitle>Sinopse</SSubtitle>
                    <span>{filme?.overview}</span>
                    <SBoxEquipe>
                        {equipe.map((e :iEquipe) => (
                            <SCardEquipe key={e.id+'-'+e.job}>
                                <SCardTitle>{e.name}</SCardTitle>
                                <span>{e.job}</span>
                            </SCardEquipe>
                        ))}
                    </SBoxEquipe>
                </SFlexBoxColumn>
            </SBox>
            <SFlexBoxColumn style={{marginTop: '7rem'}}>
                <h1>Elenco</h1>
                <SFlexBox>
                    {elenco.map((ator: iElenco) => (
                        <SFlexCard key={ator.id}>
                            <SCardImage src={`${BASE_IMG}${ator.profile_path}`} loading="lazy" />
                            <SCardTitle>{ator.name}</SCardTitle>
                            <span>{ator.character}</span>
                        </SFlexCard>
                    ))}
                </SFlexBox>
            </SFlexBoxColumn>
            <SFlexBoxColumn>
                <h1>Trailer</h1>
                {trailerKey ? <iframe 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen>
                </iframe> : 
                <span>Não encontrado</span> }
            </SFlexBoxColumn>
            <SFlexBoxColumn>
                <h1>Recomendações</h1>
                <SFlexBox>
                    {recomendacoes.map((filme: iFilme) => (
                        <SFlexCard key={filme.id} onClick={() => handleClickFilmeNavigation(filme)}>
                            <SCardImage src={`${BASE_IMG}${filme.poster_path}`} loading="lazy" />
                            <SCardTitle>{filme.title}</SCardTitle>
                            <span>{filme.release_date}</span>
                        </SFlexCard>
                    ))}
                </SFlexBox>
            </SFlexBoxColumn>
        </SMainPage>
    )
}

export default FilmeDetalhes;