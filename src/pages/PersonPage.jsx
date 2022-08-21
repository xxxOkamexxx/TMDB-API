import { useParams } from "react-router-dom"
import usePerson from "../hooks/usePerson"

// component
import WarningAlert from '../components/alerts/WarningAlert'

// styles 
import Container from 'react-bootstrap/esm/Container'

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
        
       </>
      }
    </Container>
  )
}

export default PersonPage