import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import { ItemList } from "../../components";

/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
export default function ItemListcontainer({ pageIndex }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems(setItems);
  }, []);

  const filteredBooks = filteredItemList(items, pageIndex);
  return (
    <>
      <ItemList pageIndex={pageIndex} filteredItems={filteredBooks} />
    </>
  );
}

//Function that returns a filtered item array based on its corresponding page section
const filteredItemList = (items, currentPageSection) => {
  if (currentPageSection === "Physical books")
    currentPageSection = "Physical_books";
  if (currentPageSection === "Home") return items;
  return items.filter((item) => item.itemSection === currentPageSection);
};

const getItems = (setItems) => {
  fetch("../json/books.json")
    .then((response) => response.json())
    .then((item) => {
      setTimeout(() => {
        setItems(item);
        console.log("Delayed for 2 seconds.");
      }, 2000);
    });
};
