import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row className="d-flex justify-content-end align-items-start">
        <Col>
          <Link style={{ fontSize: "26px", marginRight: "30px" }}>
            <BsFacebook color="gray" />
          </Link>
          <Link style={{ fontSize: "26px", marginRight: "30px" }}>
            <BsInstagram color="gray" />
          </Link>
          <Link style={{ fontSize: "26px" }}>
            <BsTwitter color="gray" />
          </Link>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Audio Description</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Investor Relations</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Illegal Information</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Service Code</p>
          </Link>
        </Col>
        <Col>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Help Center</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Job Vacancy</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Cookie Preferences</p>
          </Link>
        </Col>
        <Col>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Gift Card</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Terms of Use</p>
          </Link>
          <Link style={{ textDecoration: "none", color: "gray" }}>
            <p>Company Information</p>
          </Link>
        </Col>
        <Col>
          <p
            style={{
              color: "gray",
              fontSize: "14px",
              textAlign: "end",
            }}
          >
            @ Copyrigth Ariantika 2023
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
