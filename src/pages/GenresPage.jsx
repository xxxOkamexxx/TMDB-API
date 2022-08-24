import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import TmdbAPI  from '../services/TmdbAPI'

// components
import WarningAlert from '../components/alerts/WarningAlert'

// styles
import Container from 'react-bootstrap/Container'

const GenresPage = () => {
  const { genre_id } = useParams()
  const { isLoading, isError, error, data: genre } = useQuery(['genres', {page, genre_id}], () => TmdbAPI.getByGenre(genre_id))

   

  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {genre && (
          <>
            <h1>Genre</h1>
          
                    
          </>
           
        )
       }

    </Container>
  )
}

export default GenresPage


