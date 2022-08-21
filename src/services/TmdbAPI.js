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
    console.log('API_KEY: ', API_KEY)
    return response.data.results
}

/**
 * Popular Movies
 */
const getPopularMovies = async () => { 
    return get(`/movie/popular${apiKey}&include_adult=false`)
}

/**
 * Top Rated Movies
 */
const getTopRatedMovies = async () => {   
    return get(`/movie/top_rated${apiKey}&include_adult=false`)
}

 /*=====================
  * Get a movie info
  *(with actor)
  ======================*/
  const getMovie = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}${apiKey}&append_to_response=credits&include_adult=false`)
    console.log('API_KEY: ', API_KEY)
    console.log('response', response.data)
    return response.data
}

 /*=====================
  * Get a actor info
  ======================*/
  const getPeople = async (id) => {
    const response = await axios.get(`${BASE_URL}/person/${id}${apiKey}&append_to_response=movie_credits&include_adult=false`)
    console.log('API_KEY: ', API_KEY)
    console.log('response', response.data)
    return response.data
}

export default {
    getPopularMovies,
    getTopRatedMovies,
    getMovie,
}