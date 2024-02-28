import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import imagen from '/colores.webp';
import imagen2 from '/figma.webp';

import "../Estilos/_tema1.scss";

function Tema1() {
  return (
    <Container className="background-image">
      <Container className='text-center mt-3'>
        <h2 className='subtitle'>Tema 1. Panificación de la interfaz de usuario</h2>
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
                <Button variant="primary" href="https://www.canva.com/design/DAF0Oi5qhk4/UaaUBHNQHpui0FtFhh8oVQ/view" target="_blank">Abrir en Canva</Button>
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
                <Button variant="primary" href="https://www.figma.com/file/Z7V0gzKQmUsiXCKNdssege/Untitled?type=design&node-id=0%3A1&mode=dev&t=hbWF43fOqkAfI60Y-1" target="_blank">Prototipo Figma</Button>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Tema1;





