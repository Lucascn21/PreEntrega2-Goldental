import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ItemDetail(props) {
  const { itemName, price, itemSection, itemImage, itemDescription } =
    props.itemData;
  let imgFoundPath =
    process.env.PUBLIC_URL + `/img/${itemSection}/${itemImage}`;
  let imgNotFoundPath = process.env.PUBLIC_URL + `/img/no_image.jpg`;
  return (
    <>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={itemName ? imgFoundPath : imgNotFoundPath}
          alt={props.itemName || "Placeholder"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemName}
          </Typography>
          <Typography variant="overline" color="text.secondary">
            ${new Intl.NumberFormat("de-DE").format(price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </>
  );
}
