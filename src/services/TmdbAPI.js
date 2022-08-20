import axios from "axios"

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = `?api_key=${import.meta.env.VITE_API_KEY}`
const apiKey = '?api_key=' + '4e7030cd00fd950f89ca25a67f10944f'

axios.defaults.baseURL = "http://localhost:3000"

 /*================================
  * Get Movies by type 
  *(popular/now_playing/top_rated)
  =================================*/

/**
 * Popular Movies
 */
const getPopularMovies = async () => {   
    const response = await axios.get(`${BASE_URL}/movie/popular${apiKey}`)
    console.log('response', response.data.results)
    console.log('API KEY', API_KEY)
    return response.data.results
}

/**
 * Top Rated Movies
 */
const getTopRatedMovies = async () => {   
    const response = await axios.get(`${BASE_URL}/movie/top_rated${apiKey}`)
    console.log('response', response.data.results)
    return response.data.results
}

 /*=====================
  * Get a single movie 
  *(with actor)
  ======================*/
  const getMovie = (id) => {
    return get(`/movie/${id}${apiKey}`)
}

export default {
    getPopularMovies,
    getTopRatedMovies,
    getMovie,
}