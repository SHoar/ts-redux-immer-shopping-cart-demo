import React, { useState } from "react";
// import { Form, Input, Button, Icon, Message } from "semantic-ui-react";
import { TextField, Button, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import { addToCart, Product } from "../../../redux/modules/products";
import { connect } from "react-redux";

const UnconnectedAddForm: React.FC<Props> = ({ addToCart, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const add = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <form>
      <TextField
        type="number"
        label="Quantity"
        variant="outlined"
        value={quantity}
        onChange={e => setQuantity(Math.max(Number(e.target.value), 1))}
      />
      <br />
      <Button disableRipple onClick={add}>
        <LocalGroceryStoreIcon /> {"  "}Add to cart
      </Button>
      {added ? (
        <>
          <Snackbar open={added} color="green">
            <Alert severity="success">
              <strong>
                {quantity} {product.name}
              </strong>{" "}
              added to cart!{"  "}
              <Close onClick={() => setAdded(!added)}>x</Close>
            </Alert>
          </Snackbar>
        </>
      ) : (
        ""
      )}
    </form>
  );
};

type OwnProps = {
  product: Product;
};
const mapDispatchToProps = { addToCart };

type Props = typeof mapDispatchToProps & OwnProps;

export const AddForm = connect(
  null,
  mapDispatchToProps
)(UnconnectedAddForm);
