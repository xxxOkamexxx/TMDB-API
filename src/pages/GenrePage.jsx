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


const GenrePage = () => {
  const [genreName, setGenreName] = useState('')
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1, 
    genre_id: '',
  })

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
  const {genre_id}  = useParams()
  console.log('page : id =', page + ' : ' + genre_id)

  const { data, error, isError, isLoading, isSuccess } = useQuery(['genres', {genre_id, page}], () => TmdbAPI.getByGenre(genre_id, page), {keepPreviousData: true})
  

  const getGenreName = async () => {
    const genreList = await TmdbAPI.getGenreList()
    const genreListItem = genreList.genres.find(genre => genre.id == genre_id)
    setGenreName(genreListItem.name)    
  }
  
  useEffect(() => {
    setSearchParams({ genre_id, page })
    TmdbAPI.getByGenre({genre_id, page})
    getGenreName()
  },[page, genre_id])
  
  console.log('item-name', genreName)
  console.log('data:', data)

  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {isSuccess && data.results && (
          <>
            <h1>{genreName}</h1>
            
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

export default GenrePage


