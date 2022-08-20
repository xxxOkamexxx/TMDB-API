import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'

// styles 
import Container from 'react-bootstrap/esm/Container'

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
        <div>

        </div>
        
       </>
      }
    </Container>
  )
}

export default MoviesPage
