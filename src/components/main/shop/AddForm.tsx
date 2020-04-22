import React, { useState } from "react";
// import { Form, Input, Button, Icon, Message } from "semantic-ui-react";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";

import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { addToCart, Product } from "../../../redux/modules/products";
import { connect } from "react-redux";

const mapDispatchToProps = { addToCart };

type OwnProps = {
  product: Product;
};

type Props = typeof mapDispatchToProps & OwnProps;

const UnconnectedAddForm: React.FC<Props> = ({ addToCart, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const add = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, quantity);
    setAdded(true);
  };

  return added ? (
    <Snackbar open={added} color="green">
      <Alert severity="success">
        Added{" "}
        <strong>
          {quantity} {product.name}
        </strong>{" "}
        to your cart!
      </Alert>
    </Snackbar>
  ) : (
    <form>
      <TextField
        type="number"
        label="Quantity"
        variant="outlined"
        value={quantity}
        onChange={e => setQuantity(Math.max(Number(e.target.value), 1))}
      />
      <br />
      <Button onClick={add}>
        <LocalGroceryStoreIcon />
        Add to cart
      </Button>
    </form>
  );
};

export const AddForm = connect(
  null,
  mapDispatchToProps
)(UnconnectedAddForm);
