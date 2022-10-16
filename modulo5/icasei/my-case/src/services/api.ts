import axios from 'axios'

const API_KEY = '27909b14e964a4ad89d9fdea185e7338'
const BASE_URL = 'https://api.themoviedb.org/3';

const BASE_PARAMS = {
    api_key: API_KEY, 
    language: 'pt-BR'
}

export const getGeneros = () => {
    return axios.get(`${BASE_URL}/genre/movie/list`, {params: BASE_PARAMS});
}

export const getFilmes = (filters?: {page?: number, generes?: any, with_genres?: number[]}) => {
    const params = {
        ...BASE_PARAMS,
        page: filters?.page || 1,
        with_genres: filters?.with_genres?.join(',') || null
    }
    return axios.get(`${BASE_URL}/movie/popular`, {params});
}

export const getFilmePorId = (id: number) => {
    return axios.get(`${BASE_URL}/movie/${id}`, {params: BASE_PARAMS})
}

export const getFilmesSimilares = (id: number) => {
    return axios.get(`${BASE_URL}/movie/${id}/similar`, {params: BASE_PARAMS})
}

export const getElenco = (id: number) => {
    return axios.get(`${BASE_URL}/movie/${id}/credits`, {params: BASE_PARAMS})
}

export const getTrailer = (id: number) => {
    return axios.get(`${BASE_URL}/movie/${id}/videos`, {params: BASE_PARAMS})
}