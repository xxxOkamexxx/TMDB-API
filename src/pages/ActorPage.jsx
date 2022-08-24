import { useParams } from "react-router-dom"
import usePerson from "../hooks/usePerson"
import { Link } from 'react-router-dom'

// component
import WarningAlert from '../components/alerts/WarningAlert'

// styles 
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'
import { ListGroup, Placeholder } from "react-bootstrap"


const PersonPage = () => {
    const { actor_id } = useParams()
    const { isLoading, isError, error, data:person} = usePerson(actor_id)
  return (
    <Container>
      {isLoading && (<p className="my-3">Loading ...</p>)}

      {isError && <WarningAlert message={error.message} />}

      {person &&
       <>
        <h1>{person.name}</h1>
        <Image className='img-fluid' src={person.profile_path ?  `https://image.tmdb.org/t/p/w500${person.profile_path}`: Placeholder} alt={`image av ${person.name}` }/>
        <h2 className="h3">Filmography</h2>
        
        <ListGroup>
          {person.movie_credits.cast.map(movie => (
            <ListGroup.Item
              action
              as={Link} 
              key={movie.id}
              to={`/movie/${movie.id}`}
            >
              <p className="h4">{movie.title}</p>
              <p>{movie.character}</p>               
            </ListGroup.Item>
          ))}
        </ListGroup>
        
       </>
      }
    </Container>
  )
}

export default PersonPage