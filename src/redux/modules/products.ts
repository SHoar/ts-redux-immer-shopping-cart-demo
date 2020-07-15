/* Note: This implementatin of redux in app subscribes to the Redux Duck pattern - see https://github.com/erikras/ducks-modular-redux for explanation */

import { typedAction } from "./users";
import { Dispatch, AnyAction } from "redux";
import { sampleProducts } from "../../sampleData/sampleProducts";
// import { produce } from "immer";

// Action Types
export enum ProductActions {
  ADD_PRODUCTS = "products/ADD_PRODUCTS",
  ADD_TO_CART = "products/ADD_TO_CART",
  GET_CART = "products/GET_CART",
  REMOVE_FROM_CART = "products/REMOVE_FROM_CART"
}

const { ADD_PRODUCTS, ADD_TO_CART, GET_CART } = ProductActions;

/* Action Functions */

export const addProducts = (products: Product[]) => {
  return typedAction(ADD_PRODUCTS, products);
};

export const addToCart = (product: Product, quantity: number) => {
  return typedAction(ADD_TO_CART, { product, quantity });
};

export const getCart = () => {
  return typedAction(GET_CART);
};

// Action creator returning a thunk!
export const loadProducts = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    setTimeout(() => {
      // pretend to load an item
      dispatch(addProducts(sampleProducts));
    }, 500);
  };
};

// Class Types
export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type ProductState = {
  products: Product[];
  loading: boolean;
  cart: CartItem[];
};

const initialState: ProductState = {
  products: [],
  loading: false,
  cart: []
};

type ProductAction = ReturnType<typeof addProducts | typeof addToCart>;

// Reducer

export function productsReducer(
  state = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case "products/ADD_PRODUCTS":
      // native Javascript reducer
      return {
        ...state,
        products: [...state.products, ...action.payload]
      };

    // using Immer
    // return produce<ProductState>(state, draft => {
    //   draft.products.push(...action.payload);
    // });

    case "products/ADD_TO_CART":
      // native Javascript reducer
      const addedProduct = action.payload.product;
      return {
        ...state,
        cart: [
          ...state.cart, //.filter(cartItem => cartItem.id !== addedProduct.id),
          {
            id: addedProduct.id,
            quantity: action.payload.quantity
          }
        ]
      };

    // using Immer
    // return produce<ProductState>(state, draft => {
    //   draft.cart.push({
    //     id: addedProduct.id,
    //     quantity: action.payload.quantity
    //   });
    // });

    default:
      return state;
  }
}
