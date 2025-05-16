import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./component/Hero";
import MyFooter from "./component/MyFooter";
import MyNavbar from "./component/MyNavbar";
import MyFilm from "./component/MyFilm";
function App() {
  return (
    <>
      <MyNavbar />
      <Hero />
      <MyFilm film="avengers" />
      <MyFooter />
    </>
  );
}
export default App;
