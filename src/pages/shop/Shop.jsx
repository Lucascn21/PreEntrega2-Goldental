import React from "react";
import { ItemListcontainer, Book } from "../../components";
import books from "../../data/books";
export default function Shop(props) {
  console.log(props.pageIndex);

  const filteredBooks = filteredBookList(books, props.pageIndex);

  return (
    <ItemListcontainer greeting="Shop page">
      <main>
        <h1>
          {props.greeting} {props.pageIndex}
        </h1>

        {filteredBooks.map((book) => (
          <article key={book.bookName}>
            <Book key={book.id} bookSection={props.pageIndex} bookData={book}>
              test
            </Book>
          </article>
        ))}
      </main>
    </ItemListcontainer>
  );
}

//Function that returns a filtered book array based on its corresponding page section
const filteredBookList = (books, currentPageSection) => {
  if (currentPageSection === "Physical books")
    currentPageSection = "Physical_books";
  if (currentPageSection === "Home") return books;
  return books.filter((book) => book.bookSection === currentPageSection);
};
