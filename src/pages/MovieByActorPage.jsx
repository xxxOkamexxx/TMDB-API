import { useParams, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import TmdbAPI from '../services/TmdbAPI'

// components
import MovieCard from '../components/MovieCard'
import WarningAlert from '../components/alerts/WarningAlert'
import Pagination from '../components/Pagination'

// styles
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


export const MovieByActorPage = () => {
    //const [actorName, setActorName] = useState('')
    const [searchParams, setSearchParams] = useSearchParams({
        page: 1, 
        actor_id: '',
      })
    
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
    const {actor_id}  = useParams()
    
    console.log('page : id =', page + ' : ' + actor_id)

    
    const { data, error, isError, isLoading, isSuccess } = useQuery(['movie_by_actor', {actor_id, page}], () => TmdbAPI.getByActor(actor_id, page), {keepPreviousData: true})
      
    // const { data: person } = useQuery(['person', actor_id], () => TmdbAPI.getPerson(actor_id))
      
   
    // useEffect(() => {
    //     setSearchParams({ actor_id, page })
    //     //TmdbAPI.getByActor({actor_id, page})
        
    // },[page, actor_id])
    
    console.log('data:', data)
    
  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {isSuccess && data.results && (
          <>
            <h1></h1>
            
            <Row>
              {data.results.map(movie =>(
                <Col lg={3} md={4} sm={6} key={movie.id}>
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
        )}

    </Container>
  )
}
