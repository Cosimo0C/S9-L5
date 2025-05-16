import { Container, NavDropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
function Hero() {
  return (
    <>
      <div className="d-flex text-white bg-dark gap-2 align-items-center justify-content-between pe-4  ps-4">
        <div className="d-flex flex-row align-items-center">
          <h1 className="fw-semibold me-2">TV Shows</h1>
          <NavDropdown className="border border-1 border-secondary w-25 h-50 text-center" title="Geners" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Comedy</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="d-flex flex-row gap-2">
          <div>
            <i className="bi bi-grid fs-5 text-secondary"></i>
          </div>
          <div>
            <i className="bi bi-grid-3x3 fs-5 text-secondary"></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
