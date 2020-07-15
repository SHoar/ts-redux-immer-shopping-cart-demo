import React from "react";
// import { Menu, Dropdown } from "semantic-ui-react";
import {
  AppBar,
  ButtonGroup,
  Button,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/index";
import { connect } from "react-redux";
import { numberOfItems } from "../../helpers/numberOfItems";
import { logout } from "../../redux/modules/users";

const mapStateToProps = (state: RootState) => ({
  username: state.user.username,
  numberOfItems: numberOfItems(state)
});

const mapDispatchToProps = { logout };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedLinkMenu: React.FC<Props> = ({
  logout,
  numberOfItems,
  username
}) => (
  <AppBar position="static">
    <Toolbar color="inherit">
      <Typography variant="h2">Ye Olde Shoppe</Typography>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button color="inherit" id="menu-shop">
          <Typography>
            <Link to="/shop">Shop</Link>
          </Typography>
        </Button>
        <Button color="inherit" id="cart">
          <Link to="/cart">
            <Typography>Cart</Typography>
          </Link>
        </Button>
        {username === null ? (
          <Button color="inherit" id="login">
            <Link to="/login">
              <Typography>Login</Typography>
            </Link>
          </Button>
        ) : (
          <Menu open>
            <Select
              variant="outlined"
              defaultValue={!username ? "" : username}
              displayEmpty={false}
            >
              <MenuItem onSelect={e => logout()}>Logout</MenuItem>
            </Select>
          </Menu>
        )}
      </ButtonGroup>
    </Toolbar>
  </AppBar>
);

export const LinkMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLinkMenu);
