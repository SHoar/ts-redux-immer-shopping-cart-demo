import {
  productsReducer,
  ProductState,
  Product,
  loadProducts,
  addProducts,
  addToCart
} from "../redux/modules/products";

let testProducts = [
  {
    id: 1,
    name: "Cool Headphones",
    price: 4999,
    img: "https://placeimg.com/640/480/tech/5"
  },
  {
    id: 2,
    name: "Various Parts",
    price: 1800,
    img: "https://placeimg.com/640/480/tech/10"
  },
  {
    id: 3,
    name: "Skateboard",
    price: 2999,
    img: "https://placeimg.com/640/480/animals/3"
  }
];

let testProductState: ProductState = {
  products: [],
  loading: false,
  cart: []
};

describe("ADD_PRODUCTS", () => {
  test("on addProducts, all products load as catalog options in productState", async () => {
    expect(testProducts.length).toBe(3);
    expect(testProductState.products.length).toBe(0);
    const newState = productsReducer(
      testProductState,
      addProducts(testProducts)
    );
    expect(newState.products.length).toBe(3);
    expect(testProductState.products.length).toBe(0);
  });
});

describe("ADD_TO_CART", () => {
  beforeEach(() => {
    loadProducts();
  });
  test("should return the new cart state from the productReducer", () => {
    expect(testProductState.cart.length).toBe(0);
    const chosenProduct: Product = {
      id: 3,
      name: "Skateboard",
      price: 2999,
      img: "https://placeimg.com/640/480/animals/3"
    };
    const newState = productsReducer(
      testProductState,
      addToCart(chosenProduct, 1)
    );
    console.log(newState.cart);
    expect(newState.cart.length).toBe(1);
    expect(testProductState.cart.length).toBe(0);
  });

  // xtest('testProductState is modified to have new state', () => {
  //     const newState = productsReducer(testProductState,
  //         typedAction('product/ADD'))
  // })
});
