import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./component/Hero";
import MyFooter from "./component/MyFooter";
import MyNavbar from "./component/MyNavbar";
import MyFilm from "./component/MyFilm";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container fluid className="bg-dark">
      <MyNavbar />
      <Hero />
      <MyFilm film="Avengers" />
      <MyFilm film="Batman" />
      <MyFilm film="Superman" />
      <MyFooter />
    </Container>
  );
}
export default App;
