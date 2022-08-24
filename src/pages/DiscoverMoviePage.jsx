import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import  TmdbAPI  from '../services/TmdbAPI'

// components
import WarningAlert from '../components/alerts/WarningAlert'

// styles
import Container from 'react-bootstrap/Container'

const DiscoverMoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre_id: null })  
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
    const genre_id = searchParams.get('genre_id') ? Number(searchParams.get('genre_id')) : null
    
    const { isLoading, isError, error, data, isSuccess } = useQuery(['discover', {page, genre_id}], TmdbAPI.getDiscoverMovie, {keepPreviousData: true,})
    console.log('data', data)

  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {isSuccess && data.results && (
          <>
            <h1>Discover Movies</h1>
          
                    
          </>
           
        )
       }

    </Container>
  )
}

export default DiscoverMoviesPage


