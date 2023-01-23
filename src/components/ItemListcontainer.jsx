import React from "react";
import "./ItemListContainer.scss";
import { ItemList } from "../components";
import books from "../data/books";

/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
export default function ItemListcontainer(props) {
  const filteredBooks = filteredBookList(books, props.pageIndex);
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

//Function that returns a filtered book array based on its corresponding page section
const filteredBookList = (books, currentPageSection) => {
  if (currentPageSection === "Physical books")
    currentPageSection = "Physical_books";
  if (currentPageSection === "Home") return books;
  return books.filter((book) => book.bookSection === currentPageSection);
};
