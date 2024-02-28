import React from 'react';
import { Container } from 'react-bootstrap';
import "../Estilos/_footer.scss";
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {

  return (
    <footer className="footer-container">
      <Container>
        <p className="text-center">
          Alejandro Vivas, 2024 - 2DAW-N 
        </p><a href="https://www.linkedin.com/in/alejandro-vivas-espa%C3%B1a-1602152b5/" target="_blank">
      <i className="fab fa-linkedin"></i> Ir a mi perfil de LinkedIn
    </a>
      </Container>
    </footer>
  );
}

export default Footer;
