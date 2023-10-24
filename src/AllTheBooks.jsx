import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AllTheBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    //Caricherà i dati file JSON fantasy.json
    fetch('./fantasy.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data });
      })
      .catch((error) => {
        console.error('Si è verificato un errore durante il recupero dei dati.', error);
      });
    }

    render() {
      const { books } = this.state;

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 className="text-white display-6">Fantasy books</h1>
      <Row>
        {books.map((book) => (
          <Col key={book.id} xs={6} md={4} lg={3}>
            <div className="book">
              <img src={book.img} alt={book.title} />
              <p>{book.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

}
export default AllTheBooks;