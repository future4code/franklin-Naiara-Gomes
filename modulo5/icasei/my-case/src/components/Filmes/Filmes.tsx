import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getFilmes, getGeneros } from '../../services/api';
import { formataData } from '../../sharedFunctions';
import { 
    SBoxFilme, 
    SCartaz, 
    SSectionFilmes, 
    SNomeFilme, 
    SDataLancamento,
    SBox, 
    SFiltros, 
    SFiltrosLabel, 
    SGeneroBtn, 
    STitulo, 
    SGeneroSelecionadoBtn,
    SPaginacao,
    SPaginacaoNumero,
    SPaginacaoNumeroSelecionada} from './StylesFilmes';

interface iFilme{
    id: number;
    title: string;
    release_date: string;
    poster_path: string
}

interface iGenero{
    id: number;
    name: string
}

const Filmes:React.FC = () => {
    const [filmes, setFilmes] = React.useState<iFilme[]>([])
    const [generos, setGeneros] = React.useState<iGenero[]>([]);
    const [generosSelecionados, setGenerosSelecionados] = React.useState<iGenero[]>([]);
    const [paginaSelecionada, setPaginasSelecionada] = React.useState<number>(1);
    const [paginas, setPaginas] = React.useState<number[]>([1,2,3,4,5]);
    const [ultima, setUltima] = React.useState<number>(0);
    const navigate = useNavigate()

    /**
     * Busca dados de filmes passando filtros se tiver e numero da pagina
     */
    const buscaFilmes = () => {
        getFilmes({page: paginaSelecionada, with_genres: generosSelecionados.map(g => g.id)}).then(res => {
            // Loginca para montar numero da paginas na paginação
            // paginaAtual-5 paginaAtual paginaAtual+5 
            const totalPages = res.data.total_pages;
            const page: number = res.data.page;
            let pgs = [];
            const pageORZero = page-5 < 0 ? 0 : page-5;
            const pageOrLast = page+5 < totalPages ? page+5 : totalPages;
            // adiciona as paginas anteriores a atual se maior que 0
            for(let c = page-1; c>pageORZero; c--) {
                pgs.push(c)
            }
            // adiciona a pagina atual
            pgs.push(page)
            // adicionado proximas paginas depois da pagina atual se menor que ultima pagina
            for (let c = page+1; c<pageOrLast; c++) {
                pgs.push(c)
            }
            setFilmes(res.data.results)
            setPaginasSelecionada(page)
            setPaginas(pgs.sort((a,b)=> a-b))
            setUltima(totalPages);
        })
    }

    /**
     * Busca na api lista de generos
     */
    const buscaGeneros = () => {
        getGeneros().then((res) => {
            setGeneros(res.data.genres)
        });
    }

    /**
     * Função que inserie ou exclui da lista de generos selecionados a partir do genero selecionado
     * @param genero : genero clicado
     */
    const handleClickGenero = (genero: iGenero) => {
        let novaLista: iGenero[] = [];
        if (generosSelecionados.some(g => g.id === genero.id)) {
            novaLista = generosSelecionados.filter(g => g.id !== genero.id)
        } else {
            novaLista = [...generosSelecionados, genero]
        }
        setPaginasSelecionada(1)
        setGenerosSelecionados(novaLista)
    }

    /**
     * Função que muda de pagina de acordo com pagina clicada
     * @param pagina : numero da pagina selecionada
     */
    const handleMudaPagina = (pagina: number) => {
        setPaginasSelecionada(pagina)
    }

    /**
     * Navega para tela de detalhes do filme a partir de filme selecionado
     * @param filme : filme selecionado
     */
    const handleClickFilmeNavigation = (filme: iFilme) => {
        navigate(`/${filme.id}`);
    }

    React.useEffect(()=>{
        buscaGeneros()
        buscaFilmes()
    }, [])

    React.useEffect(()=>{
        buscaFilmes()
    }, [paginaSelecionada, generosSelecionados])

    return (
        <main>
            <SBox>
                <STitulo>Milhões de filmes, séries e pessoas para descobrir. Explore já!</STitulo>
                <SFiltros>
                    <SFiltrosLabel>FILTRE POR:</SFiltrosLabel>
                    {generos.map((genero: iGenero) => (
                        generosSelecionados.some((g: iGenero) => g.id === genero.id) ?
                        (<SGeneroSelecionadoBtn key={genero.id} onClick={() => handleClickGenero(genero)}>{genero.name}</SGeneroSelecionadoBtn>) :
                        (<SGeneroBtn key={genero.id} onClick={() => handleClickGenero(genero)}>{genero.name}</SGeneroBtn>) 
                    ))}
                </SFiltros>
            </SBox>
            <SSectionFilmes>
            {filmes.map((filme: iFilme) => (
                <SBoxFilme key={filme.id} onClick={() => handleClickFilmeNavigation(filme)}>
                    <SCartaz src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} />
                    <SNomeFilme>{filme.title}</SNomeFilme>
                    <SDataLancamento>{formataData(filme.release_date)}</SDataLancamento>
                </SBoxFilme>
            ))}
        </SSectionFilmes>
        <SPaginacao>
            {paginaSelecionada !== 1 ? 
                (
                <>
                    <SPaginacaoNumero onClick={() => handleMudaPagina(1)}>Primeira</SPaginacaoNumero>
                    <SPaginacaoNumero onClick={() => handleMudaPagina(paginaSelecionada-1)}>{'<'}</SPaginacaoNumero>
                </>
                ) : <></>
            }
            {paginas.map((pagina: number) => (
                paginaSelecionada === pagina ?
                <SPaginacaoNumeroSelecionada key={pagina} onClick={() => handleMudaPagina(pagina)}>{pagina}</SPaginacaoNumeroSelecionada> :
                <SPaginacaoNumero key={pagina}  onClick={() => handleMudaPagina(pagina)}>{pagina}</SPaginacaoNumero>
            ))}
            {paginaSelecionada !== ultima ? 
                (
                <>
                    <SPaginacaoNumero onClick={() => handleMudaPagina(paginaSelecionada+1)}>{'>'}</SPaginacaoNumero>
                    <SPaginacaoNumero onClick={() => handleMudaPagina(ultima)}>Última</SPaginacaoNumero>
                </>
                ) : <></>
            }
        </SPaginacao>
        </main>
        
    )
}

export default Filmes;