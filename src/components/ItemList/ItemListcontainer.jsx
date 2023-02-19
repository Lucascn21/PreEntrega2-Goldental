import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { ItemList } from "./ItemList";
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { pages } from "../../data/pages";
import { getProducts } from "../../firebase/firebase";
/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
export const ItemListcontainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    const existingRoutes = new Set(pages);
    const categoryIsEverything = categoryId === pages[0];
    if (existingRoutes.has(categoryId)) {
      getProducts().then((items) => {
        const products = items.filter(
          (item) =>
            `${item.book.itemName.toLowerCase()}-${item.book.itemSection}` ===
              `${item.book.itemName.toLowerCase()}-${categoryId}` ||
            categoryIsEverything
        );
        const productsList = products;
        setItems(productsList);
        setLoading(false);
      });
    } else {
      getProducts().then((items) => {
        setItems(items);
        setLoading(false);
        navigate("/");
      });
    }
  }, [categoryId, navigate]);

  return loading ? <Loading /> : <ItemList filteredItems={items} />;
};
