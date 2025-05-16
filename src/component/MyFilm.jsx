import { Component } from "react";
import { Container, Row, Col, Spinner, Card } from "react-bootstrap";

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
      <Container fluid>
        <Container>
          <h3>{this.props.title}</h3>
          {console.log(this.props.film)}
        </Container>
        <Row>
          {this.state.isLoading && <Spinner animation="border" variant="danger" />}
          {this.state.films.slice(0, 6).map((film) => (
            <Col xs={6} md={3} lg={2} key={film.imdbID}>
              <Card.Img src={film.Poster} />
            </Col>
          ))}
          <Card.Body></Card.Body>
        </Row>
      </Container>
    );
  }
}
export default MyFilm;
