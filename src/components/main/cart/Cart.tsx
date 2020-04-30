import React from "react";
// import { Container, Header } from "semantic-ui-react";
import { CartItems } from "./CartItems";
import { Container, Typography } from "@material-ui/core";

export const Cart: React.FC = () => (
  <Container>
    <Typography variant="h2">Cart</Typography>
    <CartItems />
  </Container>
);
