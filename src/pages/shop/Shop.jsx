import React from "react";
import { ItemListcontainer, Book } from "../../components";
import books from "../../data/books";
export default function Shop(props) {
  return (
    <ItemListcontainer greeting="Shop page">
      {books.map((book) => (
        <Book key={book.id} bookSection={props.pageIndex}>
          test
        </Book>
      ))}
    </ItemListcontainer>
  );
}
