import React from "react";
import "./ItemListContainer.scss";
import { ItemList } from "../../components";
import items from "../../data/books";

/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
export default function ItemListcontainer(props) {
  const filteredBooks = filteredItemList(items, props.pageIndex);
  return (
    <>
      <ItemList
        greeting="hello"
        pageIndex={props.pageIndex}
        filteredBooks={filteredBooks}
      ></ItemList>
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
