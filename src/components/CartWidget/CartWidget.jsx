import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import cart from "./assets/Icono Carrito Azul.png";


const styles = {
  span: { paddingLeft: 10, },
  img: { height: 30, },
};

const CartWidget = () => {
  const { productosAgregados } = useContext(CartContext);

  const totalQuantity = () =>
    productosAgregados.reduce(
      (acumulador, valorActual) => acumulador + valorActual.quantity,
      0
    );

  return (
    !!totalQuantity() && (
<Link to="/cart">
    
    <Badge bg="info">
      <img src={cart} alt="Imagen de Carrito" style={styles.img} />
      <span style={styles.span}>{totalQuantity()}</span>
    </Badge>
    <Button>Finalizar Compra</Button>
    </Link>
  ));
};

export default CartWidget;
