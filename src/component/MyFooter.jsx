import { Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
function MyFooter() {
  return (
    <>
      <div className="bg-dark">
        <Row>
          <Col>
            <i className="bi bi-facebook text-white"></i>
            <i className="bi bi-instagram text-white"></i>
            <i className="bi bi-twitter-x text-white"></i>
            <i className="bi bi-youtube text-white"></i>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default MyFooter;
