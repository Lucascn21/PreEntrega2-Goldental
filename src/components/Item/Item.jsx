import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";

export default function Item(props) {
  const { id, itemName, price, itemSection, itemImage, item, stock } =
    props.itemData;
  let imgFoundPath =
    process.env.PUBLIC_URL + `/img/${itemSection}/${itemImage}`;
  let imgNotFoundPath = process.env.PUBLIC_URL + `/img/no_image.jpg`;
  return (
    <Card key={id} component="article">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={itemName ? imgFoundPath : imgNotFoundPath}
          alt={props.itemName || "Placeholder"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount stock={stock} />
    </Card>
  );
}
