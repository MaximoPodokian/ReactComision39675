import { useContext} from "react"
import  ItemCounter  from "../ItemCounter/ItemCounter"
import { CartContext } from "../../context/cartContext"


const ItemDetail = ({ product }) => {
	const { addItem } = useContext(CartContext)
	const onAdd = quantity => addItem(product, quantity)

	return (
		<div>
			<h1>{product.title}</h1>
			<img src={product.imageId} heigth={300} alt={product.title} />
			<p>$ {product.price}</p>
			<ItemCounter stock={product.stock} onAdd={onAdd} />
		</div>
	)
}

export default ItemDetail;