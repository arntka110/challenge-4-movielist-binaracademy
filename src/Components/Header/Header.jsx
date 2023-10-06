import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search/?query=${query}`);
  };

  return (
    <>
      <Navbar expand="md" className="bg-transparent mb-3" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <h1 style={{ color: "red" }}>MOVIELIST</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            // className="bg-light"
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledb
            y={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                <img src="../public/logo.png" alt="logo" width="100" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <Form
                  className="d-flex"
                  style={{ width: "50%" }}
                  onSubmit={handleSearch}
                >
                  <InputGroup>
                    <Form.Control
                      type="text"
                      value={query}
                      placeholder="What do you want to watch?"
                      aria-label="search"
                      className="bg-transparent border-danger rounded-pill"
                      style={{ color: "white" }}
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Button
                      type="submit"
                      variant="outline-danger"
                      className="bg-transparent rounded-pill"
                      onClick={handleSearch}
                    >
                      <BsSearch />
                    </Button>
                  </InputGroup>
                </Form>
              </Nav>
              <br />
              <Nav className="justify-content-center pe-2">
                <div className="d-flex">
                  <Button
                    variant="outline-danger"
                    className="me-3 rounded-pill"
                    style={{ width: "100%" }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="danger"
                    className="rounded-pill"
                    style={{ width: "100%" }}
                  >
                    Register
                  </Button>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
