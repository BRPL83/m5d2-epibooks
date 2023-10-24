import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
  const footerStyle = {
    color: 'white',
  }
  return (
    <Container>
      <Row>
        <Col style={{...footerStyle, textAlign: 'center'}}>EPIBOOKS - Footer - AllRights Reserved</Col>
      </Row>
    </Container>
  );
}

export default MyFooter;