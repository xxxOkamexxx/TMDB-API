import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'

// styles 
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'

const MoviesPage = () => {
    const { id } = useParams()
    const { isLoading, isError, error, data:movie} = useMovie(id)

    console.log('id', id)
    console.log('data', movie)
  return (
    <Container>
      {isLoading && (<p className="my-3">Loading Movies...</p>)}

      {isError && (
        <Alert variant="danger">
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>)
      }

      {movie &&
       <>
        <h1>{movie.title}</h1>
        {movie.genres.map(genre => (<p key={genre.id}>{genre.name}</p>))}
        <Image className='img-thumbnail' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`image av ${movie.title}` }/>
        <div>
          {movie.credits.cast.map(cast => (
            <p key={cast.id}>{cast.name} as {cast.character}</p>
          ))}
          <p>{`Released: ${movie.release_date}`}</p>
          <p>{`Runtime: ${movie.runtime}`}</p>
          <p>{`Overview: ${movie.overview}`}</p>
        </div>
        
       </>
      }
    </Container>
  )
}

export default MoviesPage
