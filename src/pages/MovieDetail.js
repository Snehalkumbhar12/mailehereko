import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=79cc8829`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("Failed to fetch movie details. Please try again later.");
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <Container><p>Loading details...</p></Container>;
  }

  if (error) {
    return <Container><p>{error}</p></Container>;
  }

  return (
    <Container className="movie-details-container">
      {/* Banner Section */}
      <div 
        className="banner"
        style={{
          backgroundImage: `url(${movie.Poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          borderRadius: '15px',
        }}
      >
        <div className="overlay"></div>
        <div className="banner-content">
          <h1>{movie.Title}</h1>
        </div>
      </div>

      <Row className="movie-content my-5">
        <Col md={4}>
          <img src={movie.Poster} alt={movie.Title} className="img-fluid movie-poster" />
        </Col>
        <Col md={8}>
          <h2>{movie.Title}</h2>
          <p><strong>Year <br/></strong> {movie.Year}</p>
          <p><strong>Runtime <br/></strong> {movie.Runtime}</p>
          <p><strong>Genres <br/></strong> {movie.Genre}</p>
          <p><strong>Plot <br/></strong> {movie.Plot}</p>
          <p><strong>Actors <br/></strong> {movie.Actors}</p>
          <Button variant="secondary" href="/">Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
