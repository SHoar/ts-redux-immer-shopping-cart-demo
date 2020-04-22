import React from "react";
// import { Card, Image } from "semantic-ui-react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { priceFormat } from "../../../helpers/priceFormat";
import { AddForm } from "./AddForm";
import { Product } from "../../../redux/modules/products";

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardContent>
          <CardMedia image={product.img} title={product.name} />

          <img src={product.img} alt={product.name} width="100%" height="33%" />
          <Typography variant="h3" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" component="p">
            {priceFormat(product.price)}
          </Typography>

          <CardActions>
            <AddForm product={product} />
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
