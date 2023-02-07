import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = (props) => {
  //Props
  const { itemName, price, stock, itemSection, itemImage, itemDescription } =
    props.itemData;

  //Img Placeholding
  const imgFoundPath =
    process.env.PUBLIC_URL + `/img/${itemSection}/${itemImage}`;
  const imgNotFoundPath = process.env.PUBLIC_URL + `/img/no_image.jpg`;

  const onAdd = (amount) => {
    console.log(amount);
    console.log(props.itemData);
  };
  return (
    <>
      <CardActionArea
        component={RouterLink}
        to={`/item/${itemName}-${itemSection}`.toLowerCase()}
      >
        <CardMedia
          component="img"
          height="140"
          image={itemName ? imgFoundPath : imgNotFoundPath}
          alt={itemName || "Placeholder"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemName || "Fetching..."}
            <Typography variant="subtitle2" color="text.secondary">
              {itemSection || "Fetching..."}
            </Typography>
          </Typography>
          <Typography variant="overline" color="text.secondary">
            ${new Intl.NumberFormat("de-DE").format(price) || "Fetching..."}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemDescription || "Fetching..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount stock={stock || 0} onAdd={onAdd} />
    </>
  );
};
