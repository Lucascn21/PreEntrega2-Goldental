import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer(props) {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("../json/books.json")
      .then((response) => response.json())
      .then((items) => {
        setTimeout(() => {
          const selectedItem = items.find(
            (item) => item.id === props.itemData.id
          );
          setproduct(selectedItem);
          console.log("Delayed for 2 second.");
        }, 2000);
      });
  }, [props.itemData.id]);
  return <ItemDetail itemData={product} />;
}
