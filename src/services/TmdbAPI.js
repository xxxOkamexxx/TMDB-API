import axios from "axios"

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = `?api_key=${import.meta.env.VITE_THE_MOVIE_DB_API_KEY
}`
const apiKey = '?api_key=' + '4e7030cd00fd950f89ca25a67f10944f'

axios.defaults.baseURL = "http://localhost:3000"


// Get Movies by type (popular/now_playing/top_rated)

// Popular Movies
const getPopularMovies = async () => {   
    const response = await axios.get(`${BASE_URL}/movie/popular${apiKey}`)
    console.log('response', response.data.results)
    return response.data.results
}

// Top rated Movies
const getTopRatedMovies = async () => {   
    const response = await axios.get(`${BASE_URL}/movie/top_rated${apiKey}`)
    console.log('response', response.data.results)
    return response.data.results
}

export default {
    getPopularMovies,
    getTopRatedMovies,
}