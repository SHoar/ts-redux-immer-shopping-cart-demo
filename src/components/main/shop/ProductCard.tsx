import React from "react";
// import { Card, Image } from "semantic-ui-react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core"
import { priceFormat } from '../../../helpers/priceFormat';
import { AddForm } from "./AddForm";
import { Product } from "../../../redux/modules/products";

type Props = {
    product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <Card variant="outlined">
            <CardMedia image={product.img} title={product.name} />
            <CardContent>
                <Typography variant="h3" component="h2">{product.name}</Typography>
                <Typography variant="body2" component="p">{priceFormat(product.price)}</Typography>
            </CardContent>
            <CardActionArea>
                <CardActions >
                    <AddForm product={product} />
                </CardActions>
            </CardActionArea>
            {/* </CardActions> */}

        </Card>
    )
}