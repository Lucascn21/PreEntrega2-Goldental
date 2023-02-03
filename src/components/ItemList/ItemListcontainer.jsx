import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
export const ItemListcontainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems(setItems);
  }, [categoryId]);

  const filteredBooks = filteredItemList(items, categoryId);
  return <ItemList filteredItems={filteredBooks} />;
};

//Function that returns a filtered item array based on its corresponding page section
const filteredItemList = (items, currentRoute) => {
  const route = currentRoute;
  if (route === "Physical books") route.split(" ", 3).join("_");
  const filtereditems = items.filter((item) => item.itemSection === route);
  return filtereditems.length ? filtereditems : items;
};

const getItems = (setItems) => {
  fetch("../json/books.json")
    .then((response) => response.json())
    .then((items) => {
      setTimeout(() => {
        setItems(items);
        console.log("Delayed item list fetching for 2 seconds.");
      }, 2000);
    });
};
