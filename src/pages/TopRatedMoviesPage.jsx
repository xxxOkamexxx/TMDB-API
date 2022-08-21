import { useQuery } from 'react-query'
import  TmdbAPI  from '../services/TmdbAPI'

// components
import MovieCard from '../components/MovieCard'
import WarningAlert from '../components/alerts/WarningAlert'

// styles
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const TopRatedMoviesPage = () => {
    
    const { isLoading, isError, error, data } = useQuery('movie', TmdbAPI.getTopRatedMovies)
    console.log('data', data)
  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
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

export default TopRatedMoviesPage
