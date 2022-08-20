import { useQuery } from 'react-query'
import  TmdbAPI  from '../services/TmdbAPI'

const MoviesPage = () => {
    
    const { isLoading, isError, error, data } = useQuery('movie', TmdbAPI.getMovie)
    console.log('data', data)
  return (
    <div>
      📽Movie info🎞
       
    </div>
  )
}

export default MoviesPage
