
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">El Viejo Coronel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Tienda</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
      
    </header>
  );
};

export default NavBar;