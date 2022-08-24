import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_API_KEY



 /*================================
  * Get Movies by type 
  *(popular/now_playing/top_rated)
  =================================*/

const get = async (endpoint) => {
    const response = await axios.get(BASE_URL + endpoint)
    console.log('API_KEY: ', API_KEY)
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


 /*=====================
  * Get movies by genres
 //https://api.themoviedb.org/3/discover/movie?api_key=(api_key)
 &include_adult=false
 &page=(page)
 &with_genres=(genre_id)
 &with_people=(actor_id) <-- ?
  ======================*/
  const getDiscoverMovie = async ({ queryKey }) => {
    const [_key, {page, genre_id}] = queryKey 
    // console.log('API_KEY: ', API_KEY)
    // console.log('response', response.data)
    return get(`/discover/movie?api_key=${API_KEY}&include_adult=false&page=${page}&with_genres=${genre_id}`)   
}
 /*=====================
  * Get movies by actor
 //https://api.themoviedb.org/3/discover/movie?api_key=(api_key)&include_adult=false&page=1&with_people=id
  ======================*/


export default {
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getMovie,
    getPerson,
    getDiscoverMovie,
}