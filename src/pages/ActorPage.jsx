import { useParams } from "react-router-dom"
import usePerson from "../hooks/usePerson"
import { Link } from 'react-router-dom'

// component
import WarningAlert from '../components/alerts/WarningAlert'

// styles 
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'
import { Placeholder } from "react-bootstrap"


const PersonPage = () => {
    const { actor_id } = useParams()
    const { isLoading, isError, error, data: person} = usePerson(actor_id)
   

  return (
    <Container>
      {isLoading && (<p className="my-3">Loading ...</p>)}

      {isError && <WarningAlert message={error.message} />}

      {person &&
       <>
        <h1>
          <Link to={`/movie/actor/${person.id}`}>
            {person.name}
          </Link>
        </h1>
        
        <div className='info-container'>
          <div className='info-image-block'>
            <Image className='img-fluid' src={person.profile_path ?  `https://image.tmdb.org/t/p/w500${person.profile_path}`: Placeholder} alt={`image av ${person.name}` }/>
          </div>

          <div className='d-flex flex-column info-detail'>
            <p><strong>Birthday</strong>{person.birthday}</p>
            <p><strong>Biography: </strong>{person.biography}</p>
          </div>
        </div>

        <h4 className='mb-5'>
          <Link to={`/movie/actor/${person.id}`}>
            Filmography
          </Link>
        </h4>
        
        
       </>
      }
    </Container>
  )
}

export default PersonPage