import  Item  from "../Item/Item"

const ItemList = ({ list }) => (
	<>
		{!list.length && "Loading"}
		{list.map(item => (
			<Item key={item.id} item={item} />
		))}
	</>
)

export default ItemList;