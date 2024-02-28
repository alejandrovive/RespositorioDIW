import React from 'react';
import { Nav } from 'react-bootstrap';
import '../Estilos/_menu.scss';

function Menu() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home" className="menu-nav">
      <Nav.Item>
        <Nav.Link href="/tema1" className="menu-link">Tema 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/tema2" eventKey="link-1" className="menu-link">Tema 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/tema3" eventKey="link-2" className="menu-link">Tema 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/tema4" eventKey="link3" className="menu-link">Tema 4</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}


export default Menu;
