import React, { useEffect } from "react";
// import { Container, Header, Card } from "semantic-ui-react"
import {
  Container,
  CardHeader,
  GridList,
  GridListTile
} from "@material-ui/core";
import { RootState } from "../../../redux/index";
import { bindActionCreators, Dispatch } from "redux";
import { loadProducts } from "../../../redux/modules/products";
import { connect } from "react-redux";
import { ProductCard } from "./ProductCard";

const mapStateToProps = (state: RootState) => ({
  products: state.products.products
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadProducts
    },
    dispatch
  );

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const UnconnectedShop: React.FC<Props> = ({ loadProducts, products }) => {
  useEffect(() => {
    if (products.length === 0) loadProducts();
  }, [loadProducts, products]);

  return (
    <Container>
      <CardHeader variant="h2">Shop</CardHeader>
      <GridList cellHeight={500} cols={3}>
        {products.map(product => (
          <GridListTile key={product.id}>
            <ProductCard product={product} />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
};

export const Shop = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedShop);
