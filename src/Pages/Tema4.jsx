import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import imagen from '/tema4.webp';
import imagen2 from '/react.webp';
import "../Estilos/_tema1.scss";

function Tema4() {
  return (
    <Container className="background-image">
      <Container className='text-center mt-3'>
        <h2 className='subtitle'>Tema 4. Accesabilidad y usabilidad web.</h2>
      </Container>

      <Container>
        <Row>
          <Col md={6}>
            <Card bg="danger"  className="card-small mt-5">
            <Container className="text-center mt-1">
              <h3 className='h3'>Apuntes</h3>
            </Container>
              <img src={imagen} alt="Descripción de la imagen" className="card-image" />
              <Container className="button-container d-flex justify-content-center"> 
                <Button variant="primary" href="https://docs.google.com/document/d/10VunCAtnyvTvKN-1HUTbuL-Mep2KBW1z48gzU4gMuV8/edit" target="_blank">Ver Apuntes</Button>
              </Container>
            </Card>
          </Col>
          <Col md={6}>
            <Card bg="danger" text="white" className="card-small mt-5">
              <Container className="text-center mt-1">
                <h3 className='h3'>Práctica</h3>
              </Container>
              <img src={imagen2} alt="Descripción de la imagen" className="card-image" />
              <Container className="button-container d-flex justify-content-center text-center"> 
                <Button variant="primary" href='' target="_blank">Bootstrap + React</Button>
                <Button variant="primary" href='' target="_blank">Prototipo Figma Git</Button>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Tema4;


