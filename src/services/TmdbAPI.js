import axios from "axios"

axios.defaults.baseURL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_API_KEY



 /*================================
  * Get Movies by type 
  *(popular/now_playing/top_rated)
  =================================*/

const get = async (endpoint) => {
    const response = await axios.get(endpoint)
    //console.log('API_KEY: ', API_KEY)
    return response.data
}

/**
 * Popular Movies
 */
const getPopularMovies = async ({ queryKey }) => { 
    const [_key, page] = queryKey
    return get(`/movie/popular?api_key=${API_KEY}&include_adult=false&language=en-US&page=${page}`)
}

/**
 * Top Rated Movies
 */
const getTopRatedMovies = async ({ queryKey }) => {   
    const [_key, page] = queryKey
    return get(`/movie/top_rated?api_key=${API_KEY}&include_adult=false&language=en-US&page=${page}`)
}

/**
 * Top New Movies
 */
const getNowPlayingMovies = async ({ queryKey }) => { 
    const [_key, page] = queryKey  
    return get(`/movie/now_playing?api_key=${API_KEY}&include_adult=false&language=en-US&page=${page}`)
}

 /*=====================
  * Get a movie info
  *(with actor)
  ======================*/
  const getMovie = async (id) => {
    return get(`/movie/${id}?api_key=${API_KEY}&append_to_response=credits&include_adult=false&language=en-US`)
    
}

 /*=====================
  * Get a actor info
  ======================*/
  const getPerson = async (id) => {
    return get(`/person/${id}?api_key=${API_KEY}&append_to_response=movie_credits&include_adult=false&language=en-US`)    
}

 /*=====================
  * Get movies by genres
 //https://api.themoviedb.org/3/discover/movie?api_key=(api_key)
        &include_adult=false
        &page=(page)
        &with_genres=(genre_id)
  ======================*/
  const getByGenre = async (genre_id, page) => {
    //const [_key, {page, genre_id}] = queryKey 
    return get(`/discover/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=${page}&with_genres=${genre_id}`)   
  }
  
  const getGenreList = async () => {
    return get(`/genre/movie/list?api_key=${API_KEY}&include_adult=false&language=en-US`)
  }

 /*=====================
  * Get movies by actor
 //https://api.themoviedb.org/3/discover/movie?api_key=(api_key)&include_adult=false&page=1&with_people=id
  ======================*/
  const getByActor = async (actor_id, page) => {
    //const [_key, {page, genre_id}] = queryKey 
    return get(`/discover/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=${page}&with_people=${actor_id}`)   
  }


export default {
    getPopularMovies,
    getTopRatedMovies,
    getNowPlayingMovies,
    getMovie,
    getPerson,
    getByGenre,
    getGenreList,
    getByActor
}