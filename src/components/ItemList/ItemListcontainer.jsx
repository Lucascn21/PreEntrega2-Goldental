import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { ItemList } from "../../components";
import { useParams } from "react-router-dom";

/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
export default function ItemListcontainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems(setItems);
  }, [categoryId]);

  const filteredBooks = filteredItemList(items, categoryId);
  return <ItemList filteredItems={filteredBooks} />;
}

//Function that returns a filtered item array based on its corresponding page section
const filteredItemList = (items, currentRoute) => {
  if (currentRoute === "Physical books") currentRoute = "Physical_books";
  if (currentRoute === "Everything" || currentRoute === undefined) return items;
  return items.filter((item) => item.itemSection === currentRoute);
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
