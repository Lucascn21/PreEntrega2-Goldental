import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../firebase/firebase";
export const ItemDetailContainer = ({ itemIdValue }) => {
  let navigate = useNavigate();
  const [item, setItem] = useState([]);
  useEffect(() => {
    getProducts().then((items) => {
      const selectedItem = items.find(
        (item) =>
          `${item.book.itemName.toLowerCase()}-${item.book.itemSection}` ===
          itemIdValue
      );
      if (!selectedItem) navigate("/not-found");
      setItem(selectedItem.book);
    });
  }, [itemIdValue, navigate]);
  return <ItemDetail itemData={item}></ItemDetail>;
};
