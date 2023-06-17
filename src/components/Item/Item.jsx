import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"


const Item = ({ item }) => (
	<Card
		style={{ width:"24 rem"}}
		key={item.id}
		className="float-start"
	>
		<div style={{overflow: "hidden", heigt:250}}>
		<Card.Img variant="top" src={item.imagen} />
		</div>

		<Card.Body>
			<Card.Title>{item.nombre}</Card.Title>
			<Card.Text>Categoría: {item.bebida}</Card.Text>
			{/* <Card.Text>{item.caracteristica}</Card.Text> */}
			<Link to={`/item/${item.id}`}>
				<Button variant="primary">Ver detalle</Button>
			</Link>
		</Card.Body>
	</Card>
)

export default Item;