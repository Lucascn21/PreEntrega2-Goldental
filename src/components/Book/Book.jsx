import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));
export default function Book(props) {
  const { id, bookName, price, bookImage } = props.bookData;
  console.log(props.bookSection); //Condition for some conditional rendering
  let imgFoundPath =
    process.env.PUBLIC_URL + `/img/${props.itemType}/${props.imgFilename}`;
  let imgNotFoundPath = process.env.PUBLIC_URL + `/img/no_image.jpg`;
  return (
    <Card component="article">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imgFilename ? imgFoundPath : imgNotFoundPath}
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
      <CardActions>
        <Button size="small" color="primary">
          +
        </Button>
        <Div>{5}</Div>
        <Button size="small" color="primary">
          -
        </Button>
        <Button sx={{flex:"auto"}}size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
