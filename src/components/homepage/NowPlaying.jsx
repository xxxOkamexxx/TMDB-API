import { useQuery } from 'react-query'
import TmdbAPI from '../../services/TmdbAPI'

// components
import HomeCard from '../../components/HomeCard'
import WarningAlert from '../../components/alerts/WarningAlert'

// styles
import Container from 'react-bootstrap/Container'


const NowPlaying = () => {   
    const { isLoading, isError, error, data, isSuccess } = useQuery(['now_playing'], TmdbAPI.getNowPlayingMovies)
    console.log('data', data)
    
  return (
    <Container>
        {isLoading && (<p className="my-3">Loading Movies...</p>)}

        {isError && <WarningAlert message={error.message} />}
    
        {isSuccess && data.results && (
          <>
            <h4>Now Playing</h4>

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

export default NowPlaying 