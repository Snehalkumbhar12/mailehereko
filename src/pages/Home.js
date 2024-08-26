import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null); // State for selected movie
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=marvel&apikey=79cc8829`
        );
        setMovies(response.data.Search || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch movies. Please try again later.");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  if (loading) {
    return (
      <Container>
        <p>Loading movies...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container className="text-left my-5">
      <h1 className="text-white mb-4">MaileHereko</h1>
      <p className="text-white-50">
        List of movies and TV shows, I{" "}
        <span style={{ color: "#6d28d9" }}>pramod Poudel</span> have watched
        till date.
      </p>
      <p className="text-white-50">
        Explore what I have watched and also feel free to make a suggestion.😉
      </p>

      <SearchBar />

      <Tab.Container defaultActiveKey="all">
        <Nav variant="pills" className="mb-3" id="pills-tab">
          <Nav.Item>
            <Nav.Link eventKey="all">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="movies">Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tvshows">TV Shows</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content id="pills-tabContent">
          <Tab.Pane eventKey="all">
            <Row>
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <Col key={movie.imdbID} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                    <MovieCard movie={movie} onClick={() => handleCardClick(movie)} />
                  </Col>
                ))
              ) : (
                <p>No movies found.</p>
              )}
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="movies">
            <Row>
              {movies.filter((movie) => movie.Type === 'movie').length > 0 ? (
                movies.filter((movie) => movie.Type === 'movie').map((movie) => (
                  <Col key={movie.imdbID} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                    <MovieCard movie={movie} onClick={() => handleCardClick(movie)} />
                  </Col>
                ))
              ) : (
                <p>No movies found.</p>
              )}
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="tvshows">
            <Row>
              {movies.filter((movie) => movie.Type === 'series').length > 0 ? (
                movies.filter((movie) => movie.Type === 'series').map((movie) => (
                  <Col key={movie.imdbID} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                    <MovieCard movie={movie} onClick={() => handleCardClick(movie)} />
                  </Col>
                ))
              ) : (
                <p>No TV shows found.</p>
              )}
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* Modal for movie details */}
      {selectedMovie && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMovie.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="img-fluid mb-3" />
            <p><strong>Year:</strong> {selectedMovie.Year}</p>
            <p><strong>Type:</strong> {selectedMovie.Type}</p>
            <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
            <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default Home;
