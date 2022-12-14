import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import  TmdbAPI  from '../services/TmdbAPI'

// components
import MovieCard from '../components/MovieCard'
import WarningAlert from '../components/alerts/WarningAlert'
import Pagination from '../components/Pagination'

// styles
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


const PopularMoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
    //const query = searchParams.get('query') ?? ''


    const { isLoading, isError, error, data, isSuccess } = useQuery(['popular', page], TmdbAPI.getPopularMovies, {keepPreviousData:true,})
    console.log('data', data)
    
  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {isSuccess && data.results && (
          <>
            <h1>Popular</h1>
            <Row>
              {data.results.map( movie =>(
                <Col lg={3} md={4} sm={6} key={movie.id} className='d-flex'>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>

            <Pagination 
              page={page}
              numPages={data.total_pages}
              hasPreviousPage={data.page !== 1}
              hasNextPage={data.page < data.total_pages}
              onPreviousPage={() => setSearchParams({ page: page - 1})}
              onNextPage={() => setSearchParams({ page: page + 1})}
            />
          </>
           
        )
       }

    </Container>
  )
}

export default PopularMoviesPage
