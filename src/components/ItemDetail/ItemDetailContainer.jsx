import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ itemData }) {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("../json/books.json")
      .then((response) => response.json())
      .then((items) => {
        setTimeout(() => {
          const selectedItem = items.find((item) => item.id === itemData.id);
          setproduct(selectedItem);
          console.log("Delayed for 2 second.");
        }, 2000);
      });
  }, [itemData.id]);
  return <ItemDetail itemData={product} />;
}
