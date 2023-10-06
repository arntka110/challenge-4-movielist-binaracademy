import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import HeroCard from "../Components/Home-2/HeroCard";
import Header from "../Components/Header/Header";

const SearchMovies = () => {
  // Create state for movies that have been searched
  const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getSearchMovies = async () => {
      try {
        const query = searchParams.get("query");
        // const page = searchParams.get("page");

        // Get the data from API with query and page variable
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_BASE_URL
          }3/search/movie?query=${query}&page=1&include_adult=false&language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );

        const { data } = response;

        // Set state for the movie that have been searched
        console.log(data);
        setMovies(data.results);
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

    getSearchMovies();
  }, [errors, searchParams]);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (movies.length === 0) {
    return (
      <div className="d-flex flex-row justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const handleSearchMovies = (searchText) => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  // Foreach or map every object of movies array
  return (
    <>
      <Header onSearch={handleSearchMovies} />
      <Container fluid className="p-3">
        <Row>
          <Col>
            <h3 style={{ fontWeight: 800 }}>Search Result:</h3>
          </Col>
        </Row>
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id}>
              <HeroCard
                id={movie.id}
                imageURL={import.meta.env.VITE_API_IMG_URL + movie?.poster_path}
                overview={movie?.overview}
                title={movie?.title}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SearchMovies;
