import { useQuery } from 'react-query'
import TmdbAPI from '../../services/TmdbAPI'

// components
import HomeCard from '../../components/HomeCard'
import WarningAlert from '../../components/alerts/WarningAlert'

// styles
import Container from 'react-bootstrap/Container'


const TopRated = () => {   
    const { isLoading, isError, error, data, isSuccess } = useQuery(['top_rated'], TmdbAPI.getTopRatedMovies)
    console.log('data', data)
    
  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {isSuccess && data.results && (
          <>
            <h4>Top Rated</h4>

            <div className='overflow'>   
                {data.results.map(movie => (
                <div key={movie.id}>
                    <br/>
                <HomeCard movie={movie} />
                </div>
                ))}     
        </div>

          </>
           
        )
       }

    </Container>
  )
}

export default TopRated 