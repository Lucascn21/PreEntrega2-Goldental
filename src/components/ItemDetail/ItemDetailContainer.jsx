import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useNavigate } from "react-router-dom";
export const ItemDetailContainer = ({ itemIdValue }) => {
  let navigate = useNavigate();
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem(setItem, itemIdValue, navigate);
  }, [itemIdValue, navigate]);
  return <ItemDetail itemData={item}></ItemDetail>;
};

const getItem = async (setItem, itemId, navigate) => {
  fetch("../json/books.json")
    .then((response) => response.json())
    .then((items) => {
      const selectedItem = items.find(
        (item) => item.itemId === Number.parseInt(itemId)
      );
      if (!selectedItem) navigate("/not-found");
      console.log("Delayed individual item detail fetching for 2 seconds.");
      setItem(selectedItem);
    });
};
