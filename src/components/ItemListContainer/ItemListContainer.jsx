import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = id
      ? query(collection(db, "EVC"), where("categoryId", "==", id))
      : collection(db, "EVC");

    getDocs(refCollection).them((snapshot) => {
      if (snapshot.size === 0) setList([]);
      else {
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>{greeting}</h1>
      <ItemList list={list} />
    </Container>
  );
};

export default ItemListContainer;
