import React from "react";

function ItemListcontainer(props) {
  return (
    <main>
        <h1>{props.greeting}</h1>
      <article>{props.children}</article>
    </main>
  );
}

export default ItemListcontainer;
