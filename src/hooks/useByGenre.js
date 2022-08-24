import { useQuery } from 'react-query'
import TmdbAPI from '../services/TmdbAPI'

const useByGenre = (page, genre_id) => {
    return(
        useQuery(['genres', {page, genre_id}], TmdbAPI.getByGenre, {keepPreviousData: true})
    )
}

export default useByGenre