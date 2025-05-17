import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./component/Hero";
import MyFooter from "./component/MyFooter";
import MyNavbar from "./component/MyNavbar";
import MyFilm from "./component/MyFilm";
function App() {
  return (
    <div className="bg-dark">
      <MyNavbar />
      <Hero />
      <MyFilm film="Avengers" />
      <MyFilm film="Batman" />
      <MyFilm film="Superman" />
      <MyFooter />
    </div>
  );
}
export default App;
