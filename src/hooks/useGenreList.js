import { useQuery } from 'react-query'
import TmdbAPI from '../services/TmdbAPI'

const useGenreList = () => {
    return useQuery('genre_list', TmdbAPI.getGenreList, {keepPreviousData: true})
}

export default useGenreList