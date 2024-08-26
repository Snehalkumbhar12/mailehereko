import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Card className="movie-card bg-lightblue" style={{ backgroundColor: '#171d44', color: '#fff', cursor: 'pointer' }}>
            <Link to={`/movie/${movie.imdbID}`}>
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
            </Link>
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                    {movie.Year}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
