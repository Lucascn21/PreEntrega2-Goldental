import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { Button } from "@mui/material";
export const ItemDetail = (props) => {
  const isStocked = (stock) => stock < 1;
  const {
    itemId,
    itemName,
    price,
    stock,
    itemSection,
    itemImage,
    itemDescription,
  } = props.itemData;
  const imgFoundPath =
    process.env.PUBLIC_URL + `/img/${itemSection}/${itemImage}`;
  const imgNotFoundPath = process.env.PUBLIC_URL + `/img/no_image.jpg`;
  return (
    <>
      <CardActionArea component={RouterLink} to={`/item/${itemId}`}>
        <CardMedia
          component="img"
          height="140"
          image={itemName ? imgFoundPath : imgNotFoundPath}
          alt={itemName || "Placeholder"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemName || "Fetching..."}
          </Typography>
          <Typography variant="overline" color="text.secondary">
            ${new Intl.NumberFormat("de-DE").format(price) || "Fetching..."}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemDescription || "Fetching..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount stock={stock || 0} />
      <Button
        onClick={() => {
          console.log("onClick");
        }}
        sx={{ flex: "auto", width: "100%" }}
        size="large"
        color="primary"
        disabled={isStocked(stock)}
      >
        Add to cart
      </Button>
    </>
  );
};
