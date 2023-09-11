import { useParams, Link } from 'react-router-dom'

// hooks
import useMovie from '../hooks/useMovie'

// component
import WarningAlert from '../components/alerts/WarningAlert'
import CastCard from '../components/CastCard'

// styles 
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'

const MoviesPage = () => {
    const { movie_id } = useParams()
    const { isLoading, isError, error, data:movie} = useMovie(movie_id)
   
    console.log('id', movie_id)
    console.log('data', movie)
  return (
    <Container>
      {isLoading && (<p className="my-3">Loading Movies...</p>)}

      {isError && <WarningAlert message={error.message} />}

      {movie &&
      <>
        <div className='d-flex-column'>
          <h1>{movie.title}</h1>
          <div>          
                {movie && movie.genres.map(genre => 
                <span className='me-2' key={genre.id}>
                  <Link 
                    to={`/genres/${genre.id}`}
                  >
                    {genre.name}
                  </Link>
                </span>)}                             
          </div>
        </div>

        <div className='info-container'>
          <div className='info-image-block'>
            <Image className='img-fluid me-3' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`image av ${movie.title}` }/>
          </div>

          <div className='d-flex flex-column info-detail'>
            <p> <strong className='h4'>Released: </strong>{movie.release_date}</p>
            <p> <strong className='h4'>Runtime: </strong>{movie.runtime} min</p>
            <p> <strong className='h4'>Overview: </strong>{movie.overview}</p>
          </div>
        </div>
        
        <strong className='h4 mb-1'>Cast:</strong>
        <div className='overflow mb-5'>
    
            {movie.credits.cast.map(cast => (
              <div key={cast.id}>
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
