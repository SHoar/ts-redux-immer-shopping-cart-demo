import { productsReducer, ProductState, Product } from '../../../redux/modules/products';
import { typedAction } from '../../../redux/index';

let testProductState: ProductState = {
    products: [
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
    ],
    loading: false,
    cart: []
}


describe("ADD_TO_CART", () => {
    test('should return the product state from the productReducer', () => {
        const chosenProduct: Product = {
            id: 3,
            name: "Skateboard",
            price: 2999,
            img: "https://placeimg.com/640/480/animals/3"
        }
        productsReducer(testProductState,
            typedAction('products/ADD_TO_CART',
                { product: chosenProduct, quantity: 1 }))
        console.log(testProductState.cart)
        expect(testProductState.cart.length).toBe(1)
    })

    xtest('testProductState is modified to have new state', () => {
        const newState = productsReducer(testProductState, 
            typedAction('product/ADD'))
    })
})