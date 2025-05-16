import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./component/Hero";
import MyFooter from "./component/MyFooter";
import MyNavbar from "./component/MyNavbar";
import MyFilm from "./component/MyFilm";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="bg-dark">
      <MyNavbar />
      <Hero />
      <MyFilm film="avengers" />
      <MyFilm film="batman" />
      <MyFilm film="superman" />
      <MyFooter />
    </div>
  );
}
export default App;
