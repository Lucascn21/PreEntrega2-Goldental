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
        (item) =>
          `${item.itemName.toLowerCase()}-${item.itemSection}` === itemId
      );
      if (!selectedItem) navigate("/not-found");
      setItem(selectedItem);
    });
};
