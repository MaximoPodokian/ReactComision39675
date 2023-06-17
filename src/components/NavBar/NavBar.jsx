import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [itemsMenu, setItemsMenu] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "EVC");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no hay resultados");
      else {
        const categories = snapshot.docs.map( item => item.data().bebida);
        const uniqueCategories = new Set(categories);
        setItemsMenu([...uniqueCategories].sort());
      }
    });
  }, []);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#INICIO">El Viejo Coronel</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/">INICIO</NavLink>
          {itemsMenu?.map((item) => (
            <NavLink key={item} to={`/category/${item}`}>
              {item.toUpperCase()}
            </NavLink>
          ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
