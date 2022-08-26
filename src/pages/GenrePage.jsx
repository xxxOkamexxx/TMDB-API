import { useParams, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import TmdbAPI from '../services/TmdbAPI'


// components
import WarningAlert from '../components/alerts/WarningAlert'
import MovieCard from '../components/MovieCard'

// styles
import Container from 'react-bootstrap/Container'
import { Pagination } from 'react-bootstrap'

const GenrePage = () => {
  const [genreName, setGenreName] = useState('')
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1, 
    genre_id: '',
  })

  const page = searchParams.get('page') 
  const {genre_id}  = useParams()
  console.log('page : id =', page + ' : ' + genre_id)

  const { data, error, isError, isLoading, isSuccess } = useQuery(['genre', {genre_id, page}], () => TmdbAPI.getByGenre({genre_id, page}), {keepPreviousData: true})
  

  const getGenreName = async () => {
    const genreList = await TmdbAPI.getGenreList()
    const genreListItem = genreList.genres.find(genre => genre.id == genre_id)
    setGenreName(genreListItem.name)
    
  }
  
  useEffect(() => {
    setSearchParams({ genre_id, page: 1 })
    TmdbAPI.getByGenre({genre_id, page})
    getGenreName()
  },[page, genre_id])
  
  console.log('item-name', genreName)

  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {isSuccess && data && (
          <>
            <h1>{genreName}</h1>
            
              <div> 
               <MovieCard movie={data} />
               <Pagination 
                  page={page}
                  numPages={data.total_pages}
                  hasPreviousPage={data.page !== 1}
                  hasNextPage={data.page < data.total_pages}
                  onPreviousPage={() => setSearchParams({ page: page - 1})}
                  onNextPage={() => setSearchParams({ page: page + 1})}
              />
              </div>
                             
          </>          
        )}

    </Container>
  )
}

export default GenrePage


