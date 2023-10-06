/* eslint-disable no-unused-vars */
import PropType from "prop-types";
import { BsPlayCircle } from "react-icons/bs";
import { Container, Card, Overlay, Image, Button } from "react-bootstrap";
import styles from "./style.module.css";

function Jumbotron({ id, title, genres, overview, vote_average, imageURL }) {
  return (
    <>
      <Container fluid="0">
        <Card className={styles["img-backdrop"]}>
          <Card.Img
            src={imageURL}
            style={{ width: "100%", border: "none" }}
            alt={id}
          />

          <Overlay
            show={true}
            target={(ref) => ref && ref.parentElement}
            placement="top"
          >
            <div className={styles["content"]}>
              <h1>{title}</h1>
              Genre: {genres}
              <p className="mt-3">{overview}</p>
              <p>⭐{vote_average}/10</p>
              <Button
                variant="danger"
                className="rounded-pill"
                size="lg"
                //   onClick={() => openTrailerModal(movie)}
              >
                <BsPlayCircle className="me-2" />
                <b>WATCH NOW</b>
              </Button>
            </div>
          </Overlay>
        </Card>
      </Container>
    </>
  );
}

Jumbotron.propTypes = {
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
  genres: PropType.array.isRequired,
  overview: PropType.string.isRequired,
  vote_average: PropType.number.isRequired,
  imageURL: PropType.string.isRequired,
};

export default Jumbotron;
