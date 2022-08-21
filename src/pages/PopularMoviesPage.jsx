import { useQuery } from 'react-query'
import { useState } from 'react'
import  TmdbAPI  from '../services/TmdbAPI'

// components
import MovieCard from '../components/MovieCard'
import WarningAlert from '../components/alerts/WarningAlert'

// styles
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const PopularMoviesPage = () => {
    const [page, setPage] = useState(1)
    const { isLoading, isError, error, data, isPreviousData } = useQuery(['movie', page], TmdbAPI.getPopularMovies, {keepPreviousData: true,})
    console.log('data', data)
    
  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {data?.results && (
          <>
            <h1>Popular</h1>
            <Row>
              {data.results.map( movie =>(
                <Col lg={3} md={4} sm={6} key={movie.id}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>

            <div className="pagination d-flex justify-content-between align-items-center mt-4">
              <Button
                disabled={isPreviousData || page <= 1}
                onClick={() => setPage(currentPage => currentPage - 1)}
                variant="primary"
              >Previous Page</Button>

              <span>Page: {page}/{data.total_pages}</span>

              <Button
                disabled={isPreviousData || page === data.total_pages}
                onClick={() => setPage(currentPage => currentPage + 1)}
                variant="primary"
              >Next Page</Button>
					  </div>
          </>
           
        )
       }

    </Container>
  )
}

export default PopularMoviesPage
