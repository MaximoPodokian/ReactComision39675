import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import CartWidget from "../CartWidget/CartWidget";
import products from "../../data/products.json";

const NavBar = () => {
  const [itemsMenu, setItemsMenu] = useState([]);
  useEffect(() => {
    const productList = new Promise((resolve, reject) => resolve(products));
    productList.then((result) => {
      const categories = result.map(item => item.category);
      const uniqueCategories = new Set(categories);
      setItemsMenu([...uniqueCategories].sort());
    });
  }, []);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#INICIO" >El Viejo Coronel</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/">INICIO</NavLink>{itemsMenu?.map(item => (<NavLink key={item} to={`/category/${item}`}>
            {item.toUpperCase()}
          </NavLink>))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;