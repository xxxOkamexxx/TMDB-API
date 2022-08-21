import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'

// component
import WarningAlert from '../components/alerts/WarningAlert'

// styles 
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'
import CastCard from '../components/CastCard'

const MoviesPage = () => {
    const { id } = useParams()
    const { isLoading, isError, error, data:movie} = useMovie(id)

    console.log('id', id)
    console.log('data', movie)
  return (
    <Container>
      {isLoading && (<p className="my-3">Loading Movies...</p>)}

      {isError && <WarningAlert message={error.message} />}

      {movie &&
       <>
        <h1>{movie.title}</h1>
        {movie.genres.map(genre => (<p key={genre.id}>{genre.name}</p>))}
        <Image className='img-thumbnail' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`image av ${movie.title}` }/>

        <div>
          <p>{`Released: ${movie.release_date}`}</p>
          <p>{`Runtime: ${movie.runtime} min`}</p>
          <p>{`Overview: ${movie.overview}`}</p>
        </div>
        
        <div className='overflow'>
          <div>Cast:</div>
    
            {movie.credits.cast.map(cast => (
              <div key={cast.id}>
                <br/>
                <CastCard cast={cast} />
              </div>
            ))}
      
        </div>
       </>
      }
    </Container>
  )
}

export default MoviesPage
