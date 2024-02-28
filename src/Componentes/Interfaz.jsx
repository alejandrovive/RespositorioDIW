import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../Estilos/_interfaz.scss'; 

function Interfaz() {
  return (
    <main>
      <section className="hero">
        <Container>
          <Row>
            <Col>
              <header>
                <Container className="hero-content text-center mt-3">
                  <Image 
                    src="/movil.webp"
                    alt="Imagen principal del banner"
                    fluid
                    className="hero-image"
                  />
                  <h1 className='title'>
                    <span>Alejandro</span>
                    <br />
                    <span>Vivas</span>
                  </h1>
                </Container>
              </header>  
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Interfaz;

