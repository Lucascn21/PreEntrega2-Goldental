import React from "react";
import "./ItemListContainer.scss";
import { Book } from ".";

/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
export default function ItemListcontainer(props) {
  return (
    <main>
      <h1>
        {props.greeting} {props.pageIndex}
      </h1>
      {props.filteredBooks.map((book) => (
        <article key={book.bookName}>
          <Book key={book.id} bookSection={props.pageIndex} bookData={book}>
            test
          </Book>
        </article>
      ))}
    </main>
  );

  //return props.children;
}
