import { Link } from 'react-router-dom'

// style
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'

const MovieCard = ({ movie }) => {
    return(
        <Card className='mb-4 card' as={Link} to={`/movie/${movie.id}`}>
            { movie.backdrop_path ? <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} /> : <Placeholder as={Card.Img} />}
            
            <Card.Body>
                <Card.Title className='card-headline'>{movie.title}</Card.Title>
                <Card.Text className='text'>{`Released: ${movie.release_date}`}</Card.Text>
            </Card.Body>

        </Card>
    )
}
export default MovieCard

