import React from "react";
import { ItemListcontainer } from "../../components";
export default function Shop(props) {
  return (
    <ItemListcontainer greeting="Shop page">
      {props.pageIndex}
    </ItemListcontainer>
  );
}
