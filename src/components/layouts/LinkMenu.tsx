import React from "react";
// import { Menu, Dropdown } from "semantic-ui-react";
import { AppBar, ButtonGroup, Button, Menu, MenuItem, Select, Toolbar, Typography, } from "@material-ui/core"
import { Link } from "react-router-dom";
import { RootState } from '../../redux/index';
import { connect } from 'react-redux';
import { numberOfItems } from "../../helpers/numberOfItems";
import { logout } from '../../redux/modules/users';

const mapStateToProps = (state: RootState) => ({
    username: state.user.username,
    numberOfItems: numberOfItems(state)
});

const mapDispatchToProps = { logout }

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedLinkMenu: React.FC<Props> = ({ logout, numberOfItems, username }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h2">Ye Olde Shoppe</Typography>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">                
            <Button id="menu-shop" >
                    <Link to="/shop">Shop</Link>
                </Button>
                <MenuItem id="cart">
                    <Link to="/cart">Cart</Link>
                </MenuItem>
                {username === null ? (
                    <MenuItem id="login">
                        <Link to="/login">Login</Link>
                    </MenuItem>
                ) : (
                        <Button id="username" > 
                            {username}
                            <Select>
                                <MenuItem onClick={() => logout()}>Logout</MenuItem>
                            </Select>
                        </Button>
                    )}
            </ButtonGroup>
        </Toolbar>
    </AppBar>
)

export const LinkMenu = connect(mapStateToProps, mapDispatchToProps)(UnconnectedLinkMenu);