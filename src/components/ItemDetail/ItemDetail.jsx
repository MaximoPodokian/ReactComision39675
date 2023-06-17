import { useContext} from "react"
import  ItemCounter  from "../ItemCounter/ItemCounter"
import { CartContext } from "../../context/cartContext"


const ItemDetail = ({ product }) => {
	const { addItem } = useContext(CartContext)
	const onAdd = quantity => addItem(product, quantity)

	return (
		<div>
			<h1>{product.nombre}</h1>
			<img src={product.imagen} heigth={300} alt={product.tipo} />
			<p>$ {product.precio}</p>
			<p>Caracteristicas: {product.caracteristicas}</p>
			<p>Composicion: {product.composicion}</p>
			<p>Crianza: {product.crianza}</p>
			<p>Maridaje: {product.maridaje}</p>
			<ItemCounter stock={product.stock} onAdd={onAdd} />
		</div>
	)
}


export default ItemDetail;