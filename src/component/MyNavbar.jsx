import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/assets/netflix_logo.png" style={{ height: "40px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link className="fw-normal text-white">Home</Nav.Link>
            <Nav.Link className="fw-bold text-white" href="#">
              TV Shows
            </Nav.Link>
            <Nav.Link className="fw-normal text-white" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="fw-normal text-white" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="fw-normal text-white" href="#">
              My list
            </Nav.Link>
          </Nav>
          <Nav className="d-flex flex-row align-items-center gap-1">
            <Nav.Link>
              <i className="bi bi-search text-white"></i>
            </Nav.Link>
            <Nav.Link className="fw-bold text-white"> KIDS</Nav.Link>
            <Nav.Link>
              <i className="bi bi-bell text-white"></i>
            </Nav.Link>
            <Nav.Link>
              <i className="bi bi-person-circle text-white fs-5"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
