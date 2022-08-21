import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_API_KEY


const apiKey = '?api_key=' + API_KEY



 /*================================
  * Get Movies by type 
  *(popular/now_playing/top_rated)
  =================================*/

const get = async (endpoint) => {
    const response = await axios.get(BASE_URL + endpoint)
    //console.log('API_KEY: ', API_KEY)
    return response.data
}

/**
 * Popular Movies
 */
const getPopularMovies = async ({ queryKey }) => { 
    const [_key, page] = queryKey
    return get(`/movie/popular${apiKey}&include_adult=false&page=${page}`)
}

/**
 * Top Rated Movies
 */
const getTopRatedMovies = async ({ queryKey }) => {   
    const [_key, page] = queryKey
    return get(`/movie/top_rated${apiKey}&include_adult=false&page=${page}`)
}

/**
 * Top Rated Movies
 */
const getNowPlayingMovies = async ({ queryKey }) => { 
    const [_key, page] = queryKey  
    return get(`/movie/now_playing${apiKey}&include_adult=false&page=${page}`)
}

 /*=====================
  * Get a movie info
  *(with actor)
  ======================*/
  const getMovie = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}${apiKey}&append_to_response=credits&include_adult=false`)
    // console.log('API_KEY: ', API_KEY)
    // console.log('response', response.data)
    return response.data
}

 /*=====================
  * Get a actor info
  ======================*/
  const getPerson = async (id) => {
    const response = await axios.get(`${BASE_URL}/person/${id}${apiKey}&append_to_response=movie_credits&include_adult=false`)
    // console.log('API_KEY: ', API_KEY)
    // console.log('response', response.data)
    return response.data
}

export default {
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getMovie,
    getPerson,
}