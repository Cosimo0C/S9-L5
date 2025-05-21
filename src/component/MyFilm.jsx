import { Component } from "react";
import { Container, Row, Col, Spinner, Card, CardImg } from "react-bootstrap";

class MyFilm extends Component {
  state = {
    films: [],
    isLoading: false,
  };
  componentDidMount = async () => {
    this.setState({ isLoading: true });

    try {
      let resp = await fetch(`http://www.omdbapi.com/?s=${this.props.film}&apikey=c2ca027b`);
      if (resp.ok) {
        const films = await resp.json();
        this.setState({ films: films.Search });
      } else {
        throw new Error(`Errore nel reperimento dei film`, resp.status);
      }
    } catch (error) {
      console.log(`error`, error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <Container fluid className="bg-dark d-flex flex-column justify-content-center ms-2">
        <h3 className=" text-white">{this.props.film}</h3>
        <Row>
          {this.state.isLoading && <Spinner animation="border" variant="danger" />}
          {this.state.films.slice(0, 6).map((film) => (
            <Col className="p-0" xs={6} md={4} lg={2} key={film.imdbID}>
              <Card.Img className="p-2" src={film.Poster} />
            </Col>
          ))}
          <Card.Body></Card.Body>
        </Row>
      </Container>
    );
  }
}
export default MyFilm;
