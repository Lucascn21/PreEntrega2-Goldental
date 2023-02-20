import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useNavigate } from "react-router-dom";
import { getProductById, getProductByName } from "../../firebase/firebase";
export const ItemDetailContainer = (props) => {
  let navigate = useNavigate();
  const [item, setItem] = useState([]);
  const isRouteValid = (item, route) => {
    return route === `${item.itemName}-${item.itemSection}`.toLowerCase();
  };
  useEffect(() => {
    if (props.itemID) {
      getProductById(props.itemID).then((item) => {
        if (!item) navigate("/not-found");
        setItem(item);
      });
    } else if (props.itemIdRouteValue) {
      getProductByName(props.itemIdRouteValue).then((item) => {
        if (isRouteValid(item, props.itemIdRouteValue)) {
          setItem(item);
        } else {
          navigate("/not-found");
        }
      });
    }
  }, [props, navigate]);
  return <ItemDetail itemData={item}></ItemDetail>;
};
