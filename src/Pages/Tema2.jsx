import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import imagen from '/estilos.webp';
import imagen2 from '/bootstrap.webp';

import "../Estilos/_tema2.scss";

function Tema2() {
  return (
    <Container className="background-image">
      <Container className='text-center mt-3'>
        <h2 className='subtitle'>Tema 2. Uso de estilos</h2>
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
                <Button variant="primary" href="https://docs.google.com/presentation/d/1s07y6BmiF1kD85V6UHcA2M0R9-66OuV_SYXzPA9xJIc/edit#slide=id.p1" target="_blank">Bootstrap</Button>
                <Button variant="primary" href="https://docs.google.com/presentation/d/1EoAPLd6Hsd7cxBBQcK3jgDreaL5_dVUj5IL6FkLFRAc/edit#slide=id.p1" target="_blank">Sass</Button>
                <Button variant="primary" href="https://docs.google.com/presentation/d/1mv9TxOBQbs3WSdCuNJJ4N3AB2WyYR1pbIXHFXNfcPS0/edit#slide=id.p" target="_blank">Media Queries</Button>
                <Button variant="primary" href="https://docs.google.com/presentation/d/107FSpB8Sfzxrn9nvc0HkIwX4buupUa47ggcPdXqSl4I/edit#slide=id.p1" target="_blank">Grid</Button>
                <Button variant="primary" href="https://docs.google.com/presentation/d/1CiLd1YnoHxeYsHms_3fg1UdRqjgYCcHoekYuB0GolhU/edit#slide=id.p" target="_blank">Flex</Button>
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
                <Button variant="primary" href="https://www.figma.com/file/Z7V0gzKQmUsiXCKNdssege/Untitled?type=design&node-id=0%3A1&mode=dev&t=hbWF43fOqkAfI60Y-1" target="_blank" rel="noopener noreferrer">Práctica SASS</Button>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Tema2;










