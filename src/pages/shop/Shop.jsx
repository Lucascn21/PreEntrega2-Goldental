import React from "react";
import { ItemListcontainer } from "../../components";
export default function Shop(props) {
  return (
    <main>
      <ItemListcontainer pageIndex={props.pageIndex}></ItemListcontainer>
    </main>
  );
}
