import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import  getMovies  from '../services/TmdbAPI'

const MoviesPage = () => {
    const { type } = useParams()
    const { isLoading, isError, error, data } = useQuery(['movie', type], getMovies)
  return (
    <div>
      📽Movies are here🎞
    </div>
  )
}

export default MoviesPage
