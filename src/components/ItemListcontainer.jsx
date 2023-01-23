import React from "react";
import "./ItemListContainer.scss";

/*
Container component that Receives a Shop or Cart Component as a children to render
This component will be used as a Container Component in Shop and Cart.
*/
function ItemListcontainer(props) {
  console.log(props.children);
  //return props.children;
  return <div>asd</div>;
}

export default ItemListcontainer;
