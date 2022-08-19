import { useQuery } from 'react-query'
import  TmdbAPI  from '../services/TmdbAPI'

// components
import MovieCard from '../components/MovieCard'

// styles
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const PopularMoviesPage = () => {
    
    const { isLoading, isError, error, data } = useQuery('movie', TmdbAPI.getPopularMovies)
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
    
        {data && (
          <>
            <Row>
              {data.map( movie =>(
                <Col lg={3} md={4} sm={6} key={movie.id}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
          </>
           
        )
       }

    </Container>
  )
}

export default PopularMoviesPage
