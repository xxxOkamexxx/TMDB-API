// style
import Card from 'react-bootstrap/Card'

const MovieCard = ({ movie }) => {
    return(
        <Card className='mb-4'>
            <Card.Img variant="top" src={movie.poster_path} />
            <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
            </Card.Body>

        </Card>
    )
}
export default MovieCard

