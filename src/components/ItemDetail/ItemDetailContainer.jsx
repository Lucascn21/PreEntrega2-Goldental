import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";
export const ItemDetailContainer = ({ itemIdValue }) => {
  let navigate = useNavigate();
  const [item, setItem] = useState([]);
  useEffect(() => {
    getProduct(itemIdValue).then((item) => {
      if (!item) navigate("/not-found");
      setItem(item.book);
    });
  }, [itemIdValue, navigate]);
  return <ItemDetail itemData={item}></ItemDetail>;
};
