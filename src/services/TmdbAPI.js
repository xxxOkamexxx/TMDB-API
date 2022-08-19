import axios from "axios"

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY
const apiKey = '4e7030cd00fd950f89ca25a67f10944f'

axios.defaults.baseURL = "http://localhost:3000"


// Get Movies by type (popular/latest/top_rated)

// Popular Movies
const getPopularMovies = async () => {   
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${apiKey}`)
    console.log('response', response.data.results)
    return response.data.results
}

export default {
    getPopularMovies,
}