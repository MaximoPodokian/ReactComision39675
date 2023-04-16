import React from "react";

const navBarExample = () => {
  return (
    // Boostrap !!!

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <link to="/">
            <img src="./EVC Logo Chico.jpg" width="50" alt="Logo EVC" />
          </link>
          <link to="/">
            <img
              src="./Icono Carrito Azul.png"
              width="50"
              alt="Imagen de Carrito de Compras"
            />
          </link>
          <h6 className="unidadesCarrito">0</h6>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx auto">
              <li className="nav-item">
                <link className="nav-link " to="/">
                  inicio
                </link>
              </li>

              <li className="nav-item">
                <link className="nav-link " to="/">           
                  items
                </link>
              </li>

              <li className="nav-item">
                <link className="nav-link " to="/">
                  ofertas
                </link>
              </li>

              <li className="nav-item">
                <link className="nav-link " to="/">
                  contacto
                </link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default navBarExample;
