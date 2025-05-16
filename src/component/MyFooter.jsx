import { Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
function MyFooter() {
  return (
    <>
      <Container fluid className="bg-dark mt-5">
        <Container className="my-2">
          <Row>
            <Col>
              <i className="bi bi-facebook text-white me-2"></i>
              <i className="bi bi-instagram text-white me-2"></i>
              <i className="bi bi-twitter-x text-white me-2"></i>
              <i className="bi bi-youtube text-white me-2"></i>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex align-items-center">
          <Col className="d-flex w-50">
            <Col className="d-flex flex-column">
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Audio and Subtitles
              </a>
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Media Center
              </a>
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Privacy
              </a>
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Contact us
              </a>
            </Col>
            <Col className="d-flex flex-column">
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Audio Description
              </a>
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Investor Relations
              </a>
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Legal Notices
              </a>
            </Col>
            <Col className="d-flex flex-column">
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Help Center
              </a>
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Jobs
              </a>
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Cookie Preferences
              </a>
            </Col>
            <Col className="d-flex flex-column">
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Gift Cards
              </a>
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Terms of Use
              </a>
              <a className="text-decoration-none text-secondary" href="#" alt="footer link">
                Corporate Information
              </a>
            </Col>
          </Col>
        </Container>
        <Container className="bg-dark">
          <Button className="bg-dark border-secondary text-secondary mt-3">Service Code</Button>
          <h4 style={{ fontSize: 15 }} className="text-secondary pb-2 mt-2 mb-0">
            © 1997-2023 Netflix, Inc.
          </h4>
        </Container>
      </Container>
    </>
  );
}
export default MyFooter;
