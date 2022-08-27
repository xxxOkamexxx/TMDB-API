import { Link } from 'react-router-dom'

// style
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'

const CastCard = ({ cast }) => {
    return(
        <Card className='cast_cardSize p-2'  as={Link} to={`/actor/${cast.id}`}>
            { cast.profile_path ? <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} /> : <Placeholder as={Card.Img} style={{ height: 267 }} />}
              
            <Card.Title>{cast.name}</Card.Title>
            <Card.Text className='card_text'>{cast.character}</Card.Text>
            
        </Card>
    )
}
export default CastCard