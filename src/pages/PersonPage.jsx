import { useParams } from "react-router-dom"
import usePerson from "../hooks/usePerson"

// styles 
import Container from 'react-bootstrap/esm/Container'

const PersonPage = () => {
    const { id } = useParams()
    const { isLoading, isError, error, data:person} = usePerson(id)
  return (
    <Container>
      {isLoading && (<p className="my-3">Loading Movies...</p>)}

      {isError && (
        <Alert variant="danger">
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>)
      }

      {person &&
       <>
        <h1>{person.name}</h1>
        
       </>
      }
    </Container>
  )
}

export default PersonPage