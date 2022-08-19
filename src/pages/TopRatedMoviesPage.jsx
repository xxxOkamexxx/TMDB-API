import { useQuery } from 'react-query'
import  TmdbAPI  from '../services/TmdbAPI'

const TopRatedMoviesPage = () => {
    
    const { isLoading, isError, error, data } = useQuery('movie', TmdbAPI.getTopRatedMovies)
    console.log('data', data)
  return (
    <div>
      📽Movies are here🎞
        {data && data.map( movie =>(
          <li key={movie.id}>
            <h1>{movie.original_title}</h1>
          </li>
        ))}


    </div>
  )
}

export default TopRatedMoviesPage
