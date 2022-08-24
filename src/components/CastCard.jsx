import { Link } from 'react-router-dom'

// style
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'

const CastCard = ({ cast }) => {
    return(
        <Card className='cardSize p-2'>
            { cast.profile_path ? <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} /> : <Placeholder as={Card.Img} style={{ height: 267 }} />}
              
            <Card.Title>{cast.name}</Card.Title>
            <Card.Text>{cast.character}</Card.Text>
            <Card.Text>
                <Link to={`/person/${cast.id}`}>
                    Read more...
                </Link>
            </Card.Text>
        </Card>
    )
}
export default CastCard