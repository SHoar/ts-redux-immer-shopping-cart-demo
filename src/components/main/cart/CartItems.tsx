import React /*{ MouseEvent }*/ from "react";
import { connect } from "react-redux";
// import { Item } from "semantic-ui-react";
import {
  Avatar,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { RootState } from "../../../redux/index";
import { getCartItems, getTotalPrice } from "../../../helpers/getCartItems";
import { priceFormat } from "../../../helpers/priceFormat";

const mapStateToProps = (state: RootState) => ({
  cartItems: getCartItems(state),
  totalPrice: getTotalPrice(state)
});

// const mapDispatchToProps = {
//   handleRemove: (id: number) => removeFromCart(id);
// };

type Props = ReturnType<typeof mapStateToProps>; // & typeof mapDispatchToProps>;

const UnconnectedCartItems: React.FC<Props> = ({ cartItems, totalPrice }) => {
  // const clickHandleRemove = (e: MouseEvent) => {
  //   console.log(e.target)
  //   const { id } = e.target.value;
  //   handleRemove(id);

  return (
    <>
      <Paper variant="outlined" color="inherit">
        <List>
          {cartItems.map(cartItem => (
            <ListItem key={cartItem.id}>
              <ListItemAvatar>
                <Avatar
                  src={cartItem.img}
                  alt={cartItem.name}
                  variant="rounded"
                  sizes="xl"
                />
              </ListItemAvatar>
              <br />
              <ListItemText inset>
                {cartItem.name.length > 15
                  ? cartItem.name.slice(0, 14)
                  : cartItem.name}
              </ListItemText>
              <ListItemText inset>{priceFormat(cartItem.price)}</ListItemText>
              <ListItemText inset>Quantity: {cartItem.quantity}</ListItemText>
            </ListItem>
          ))}
        </List>

        <Typography variant="h4">
          Total Price: {priceFormat(totalPrice)}
        </Typography>
      </Paper>
    </>
  );
};

export const CartItems = connect(
  mapStateToProps,
  null // mapDispatchToProps
)(UnconnectedCartItems);
