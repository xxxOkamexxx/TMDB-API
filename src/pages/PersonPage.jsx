import { useParams } from "react-router-dom"
import usePerson from "../hooks/usePerson"

// component
import WarningAlert from '../components/alerts/WarningAlert'

// styles 
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'

const PersonPage = () => {
    const { id } = useParams()
    const { isLoading, isError, error, data:person} = usePerson(id)
  return (
    <Container>
      {isLoading && (<p className="my-3">Loading ...</p>)}

      {isError && <WarningAlert message={error.message} />}

      {person &&
       <>
        <h1>{person.name}</h1>
        <Image className='img-fluid' src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={`image av ${person.name}` }/>
        <ul>
          {person.movie_credits.cast.map(movie => (
            <li key={movie.id}>
              {movie.title} | {movie.character}
            </li>
          ))}
        </ul>
        
       </>
      }
    </Container>
  )
}

export default PersonPage