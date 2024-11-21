import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { IoIosContact } from "react-icons/io";
import styles from './styles/nav.module.css'; // Importar estilos

function Navegacion() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className={styles.nav}>Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/gen1">1ª Generación</Nav.Link>
          <Nav.Link href="/gen2">2ª Generación</Nav.Link>
          <Nav.Link href="/gen3">3ª Generación</Nav.Link>
          <NavDropdown title={<span><IoIosContact /> Contactos</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/contactos/domingo">Domingo</NavDropdown.Item>
            <NavDropdown.Item href="/contactos/gines">Gines</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navegacion;