import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.css";

const Item = ({ item }) => (
	<Card
		style={{ width:"24 rem"}}
		key={item.id}
		className="float-start"
	>
		<div style={{overflow: "hidden", heigth:250}}>
		<Card.Img className="tamañoImg" variant="top" src={item.imagen} />
		</div>

		<Card.Body>
			<Card.Title>{item.nombre} {item.tipo}</Card.Title>
			<Card.Text>Categoría: {item.bebida}</Card.Text>
			<Link to={`/item/${item.id}`}>
					<Button variant="primary">Detalle</Button>
			</Link>
			<mark>Stock: {item.stock}</mark>
		</Card.Body>
	</Card>
)

export default Item;