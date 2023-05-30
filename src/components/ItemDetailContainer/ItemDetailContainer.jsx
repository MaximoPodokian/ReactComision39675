import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "EVC, id");

    getDoc(refDoc).them((snapshot) =>
      setProduct({ id: snapshot.id, ...snapshot.data() })
    );
  }, [id]);

  return (
    <Container>
      <ItemDetail product={product} />
    </Container>
  );
};

export default ItemDetailContainer;
