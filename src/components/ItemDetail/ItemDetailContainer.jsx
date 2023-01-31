import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ itemData }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem(setItem, itemData.id);
  }, [itemData.id]);
  return <ItemDetail itemData={item} />;
}

const getItem = (setItem, itemDataId) => {
  fetch("../json/books.json")
    .then((response) => response.json())
    .then((items) => {
      setTimeout(() => {
        const selectedItem = items.find((item) => item.id === itemDataId);
        setItem(selectedItem);
        console.log("Delayed for 2 seconds.");
      }, 2000);
    });
};
