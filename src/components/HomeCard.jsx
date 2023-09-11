import { Link } from 'react-router-dom'

// style
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'

const HomeCard = ({ movie }) => {
    return(
        <Card className='cardSize p-2' as={Link} to={`/movie/${movie.id}`}>
            { movie.poster_path ? <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> : <Placeholder as={Card.Img} />}
              
            <Card.Title className='card-title'>{movie.title}</Card.Title>
           
        </Card>
    )
}
export default HomeCard