import { Link } from 'react-router-dom'

// style
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'

const CastCard = ({ cast }) => {
    return(
        <Card className='cardSize'>
            {cast.profile_path === null 
                ? <Placeholder as={Card.Img} />
                : <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} /> 
            }
                  
            <Card.Title>{cast.name}</Card.Title>
            <Card.Text>as {cast.character}</Card.Text>
            <Card.Text>
                <Link to={`/person/${cast.id}`}>
                    Read more...
                </Link>
            </Card.Text>
        </Card>
    )
}
export default CastCard