import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie/'


const get = async (endpoint) => {
    const response = await axios.get(BASE_URL + endpoint)

    return response.data
}

const getMovies = () => {
    
}

export default {
    getMovies,
}