import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { ItemList } from "./ItemList";
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
  let navigate = useNavigate();
  useEffect(() => {
    getItems(setItems, categoryId, navigate);
  }, [categoryId, navigate]);

  const filteredBooks = filteredItemList(items, categoryId);
  return <ItemList filteredItems={filteredBooks} />;
};

//Function that returns a filtered item array based on its corresponding page section
const filteredItemList = (items, currentRoute) => {
  const filtereditems = items.filter(
    (item) => item.itemSection === currentRoute
  );

  return filtereditems.length ? filtereditems : items;
};

const getItems = (setItems, categoryId, navigate) => {
  fetch("../json/books.json")
    .then((response) => response.json())
    .then((items) => {
      setTimeout(() => {
        //Redirect if Shop route is not valid
        const existingRoutes = new Set(pages);
        if (existingRoutes.has(categoryId)) {
          setItems(items);
          console.log("Delayed item list fetching for 2 seconds.");
        } else {
          setItems(items);
          navigate("/");
        }
      }, 2000);
    });
};
