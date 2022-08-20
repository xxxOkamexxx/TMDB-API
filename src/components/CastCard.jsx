import { Link } from 'react-router-dom'

// style
import Card from 'react-bootstrap/Card'

const CastCard = ({ cast }) => {
    return(
        <Card className='castCard'>
            <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} />
            <Card.Title>{cast.name}</Card.Title>
            <Card.Text>as {cast.character}</Card.Text>
        </Card>
    )
}
export default CastCard