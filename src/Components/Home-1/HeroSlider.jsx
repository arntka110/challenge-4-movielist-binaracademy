import { useState, useEffect } from "react";
import axios from "axios";
import { BsPlayCircle } from "react-icons/bs";
import {
  Spinner,
  Carousel,
  Button,
  Container,
  Image,
  Modal,
} from "react-bootstrap";
import styles from "./home1.module.css";

function HeroSlider() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}3/movie/now_playing`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          },
          { params }
        );
        const { data } = response;

        console.log(data?.results.slice(12, 15));
        setNowPlayingMovie(data?.results.slice(12, 15));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrors({
            ...errors,
            isError: true,
            message: error?.response?.data?.status_message || error?.message,
          });
          return;
        }

        alert(error?.message);
        setErrors({
          ...errors,
          isError: true,
          message: error?.message,
        });
      }
    };

    getNowPlayingMovies();
  }, [errors]);

  const openTrailerModal = (movie) => {
    setSelectedMovie(movie);
    setShowTrailer(true);
  };

  const closeTrailerModal = () => {
    setSelectedMovie(null);
    setShowTrailer(false);
  };

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (nowPlayingMovie.length === 0) {
    return (
      <div className="d-flex flex-row justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Container fluid="0">
        <Carousel controls={false} interval={4000}>
          {nowPlayingMovie.map((movie) => (
            <Carousel.Item key={movie.id}>
              <div className={styles["img-backdrop"]}>
                <Image
                  src={`${import.meta.env.VITE_API_IMG_URL}${
                    movie?.backdrop_path
                  }`}
                  style={{ width: "100%" }}
                />
              </div>
              <Carousel.Caption>
                <div className={styles["content"]}>
                  <h1 style={{ fontWeight: "800" }}>{movie.title}</h1>
                  <p style={{ fontSize: "14px" }}>{movie.overview}</p>
                  <Button
                    variant="danger"
                    className="rounded-pill"
                    size="lg"
                    onClick={() => openTrailerModal(movie)}
                  >
                    <BsPlayCircle className="me-2" />
                    <b>WATCH TRAILER</b>
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Modal show={showTrailer} onHide={closeTrailerModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMovie?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              // src={import.meta.env.VITE_API_BASE_URL + selectedMovie?.video}
              frameBorder="0"
              allowFullScreen
              title="Movie Trailer"
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeTrailerModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default HeroSlider;