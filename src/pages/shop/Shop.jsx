import React from "react";
import { ItemListcontainer } from "../../components";
export default function Shop(props) {
  console.log(props.pageIndex);

  return (
    <ItemListcontainer pageIndex={props.pageIndex}>
      <main>
        <h1>
          {props.greeting} {props.pageIndex}
        </h1>
      </main>
    </ItemListcontainer>
  );
}
