import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ itemIdValue }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem(setItem, itemIdValue);
  }, [itemIdValue]);
  return <ItemDetail itemData={item}></ItemDetail>;
}

const getItem = async (setItem, itemId) => {
  fetch("../json/books.json")
    .then((response) => response.json())
    .then((items) => {
      setTimeout(() => {
        const selectedItem = items.find(
          (item) => item.itemId === Number.parseInt(itemId)
        );
        setItem(selectedItem);
        console.log("Delayed individual item detail fetching for 2 seconds.");
      }, 2000);
    });
};
