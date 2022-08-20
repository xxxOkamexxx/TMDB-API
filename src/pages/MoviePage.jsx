import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'

// styles 
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'

const MoviesPage = () => {
    const { id } = useParams()
    const { isLoading, isError, error, data} = useMovie(id)

    console.log('id', id)
    console.log('data', data)
  return (
    <Container>
      {isLoading && (<p className="my-3">Loading Movies...</p>)}

      {isError && (
        <Alert variant="danger">
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>)
      }

      {data &&
       <>
        <h1>{data.title}</h1>
        <p>{data.genres.map(genre => (<p>{genre.name}</p>))}</p> 
        <Image className='img-thumbnail' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="poster" />
        <p>{`Released: ${data.release_date}`}</p>
        <p>{`Runtime: ${data.runtime}`}</p>
        <p>{`Overview: ${data.overview}`}</p>
        
       </>
      }
    </Container>
  )
}

export default MoviesPage
