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
    return get(`/movie/popular?api_key=${API_KEY}&include_adult=false&page=${page}`)
}

/**
 * Top Rated Movies
 */
const getTopRatedMovies = async ({ queryKey }) => {   
    const [_key, page] = queryKey
    return get(`/movie/top_rated?api_key=${API_KEY}&include_adult=false&page=${page}`)
}

/**
 * Top Rated Movies
 */
const getNowPlayingMovies = async ({ queryKey }) => { 
    const [_key, page] = queryKey  
    return get(`/movie/now_playing?api_key=${API_KEY}&include_adult=false&page=${page}`)
}

 /*=====================
  * Get a movie info
  *(with actor)
  ======================*/
  const getMovie = async (id) => {
    // console.log('API_KEY: ', API_KEY)
    // console.log('response', response.data)
    return get(`/movie/${id}?api_key=${API_KEY}&append_to_response=credits&include_adult=false`)
    
}

 /*=====================
  * Get a actor info
  ======================*/
  const getPerson = async (id) => {
    // console.log('API_KEY: ', API_KEY)
    // console.log('response', response.data)
    return get(`/person/${id}?api_key=${API_KEY}&append_to_response=movie_credits&include_adult=false`)
    
}

export default {
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getMovie,
    getPerson,
}