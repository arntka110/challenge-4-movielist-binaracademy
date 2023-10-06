import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid style={{ backgroundColor: "gray" }}>
      <Row>
        <Col>
          <img src="../public/logo.png" alt="logo" width="100" />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
