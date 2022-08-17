import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org'


const get = async (endpoint) => {
    const response = await axios.get(BASE_URL + endpoint)

    return response.data
}

const getMovies = () => {
    
}

export default {
    getMovies,
}