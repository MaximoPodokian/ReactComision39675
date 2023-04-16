import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBarExample from "./components/NavBar/navBar";
import Inicio from "./components/Enlaces/inicio";
import Items from "./components/Enlaces/items";
import Ofertas from "./components/Enlaces/ofertas";
import Contacto from "./components/Enlaces/contacto";
import Body from "./components/Body/body";

function App() {
  return (
    <div claseName="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="navBar" element={<NavBarExample />} />
          <Route exact path="inicio" element={<Inicio />} />
          <Route exact path="/items" element={<Items />} />
          <Route exact path="/ofertas" element={<Ofertas />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/body" element={<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
