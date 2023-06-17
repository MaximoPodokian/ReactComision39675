import Item  from "../Item/Item";

const ItemList = ({ list }) =>{
  return(
  !list.length ? (
    <span>Loading</span>
  ) : (
    list.map(list => <Item key={list.id} item={list} />)
  )
  )
  }

export default ItemList;

