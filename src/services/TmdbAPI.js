import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const requestOptions = {
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_TMDB_API_KEY,
		//'X-RapidAPI-Host': 'api.themoviedb.org/3',
	}
}

// Get an endpoint

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    return res.data
}


// Get Movies by type (popular/latest/top_rated)

const getMovies = async ({ queryKey }) => {
    const[_key, type] = queryKey

    const response = await axios.get(`/movie/${type}?api_key=${requestOptions}`)
    
    return response.data
}

export default {
    getMovies,
}