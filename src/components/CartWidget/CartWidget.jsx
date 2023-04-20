import Badge from 'react-bootstrap/Badge';
import cart from "./assets/Icono Carrito Azul.png";

const styles ={
    img:{
        height: 30
    }
    ,
    span: {
        paddingLeft:5,
    }
}
const CartWidget = () => {
  return (
    <Badge bg="danger">
      <img src={cart} alt="Imagen de Carrito" style={styles.img}/>
      <span style={styles.span}>0</span>
    </Badge>
  );
};

export default CartWidget;
