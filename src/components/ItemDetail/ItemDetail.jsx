import  ItemCounter  from "../ItemCounter/ItemCounter"


const ItemDetail = ({ product, onAdd }) => {
	return (
		<div>
			<h1>{product.name}</h1>
			<img src={product.avatar} alt={product.name} />
			<p>$ {product.price}</p>
			<ItemCounter stock={product.stock} onAdd={onAdd} />
		</div>
	)
}

export default ItemDetail;