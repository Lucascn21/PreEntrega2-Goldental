import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { ItemList } from "./ItemList";
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { pages } from "../../data/pages";
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
    getItems(setItems, categoryId, navigate, setLoading);
    setLoading(true);
  }, [categoryId, navigate]);

  const filteredBooks = filteredItemList(items, categoryId);

  return loading ? <Loading /> : <ItemList filteredItems={filteredBooks} />;
};

//Function that returns a filtered item array based on its corresponding page section
const filteredItemList = (items, currentRoute) => {
  const filtereditems = items.filter(
    (item) => item.itemSection === currentRoute
  );

  return filtereditems.length ? filtereditems : items;
};

const getItems = (setItems, categoryId, navigate, setLoading) => {
  const existingRoutes = new Set(pages);
  fetch("../json/books.json")
    .then((response) => response.json())
    .then((items) => {
      setTimeout(() => {
        //Redirect if Shop route is not valid
        if (existingRoutes.has(categoryId)) {
          setItems(items);
          console.log("Delayed item list fetching for 2 seconds.");
          setLoading(false);
        } else {
          setItems(items);
          setLoading(false);
          navigate("/");
        }
      }, 2000);
    });
};
