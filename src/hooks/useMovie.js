import { useQuery } from "react-query"
import TmdbAPI from '../services/TmdbAPI'

const useMovie = (id) => {
    return useQuery(['movie', id], () => TmdbAPI.getMovie(id))
}

export default useMovie