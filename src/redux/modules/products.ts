// TODO: We should move typedAction elsewhere since it's shared
import { typedAction } from '../index';
import { Dispatch, AnyAction } from 'redux';
import { sampleProducts } from '../../sampleData/sampleProducts';
import { produce as p } from "immer";

export type Product = {
    id: number;
    name: string;
    price: number;
    img: string;
}

export type CartItem = {
    id: number;
    quantity: number;
}

export type ProductState = {
    products: Product[],
    loading: boolean,
    cart: CartItem[]
}

const initialState: ProductState = {
    products: [],
    loading: false,
    cart: [],
};

export const addProducts = (products: Product[]) => {
    return typedAction('products/ADD_PRODUCTS', products);
};

export const addToCart = (product: Product, quantity: number) => {
    return typedAction('products/ADD_TO_CART', { product, quantity})
};

// Action creator returning a thunk!
export const loadProducts = () => {
    return (dispatch: Dispatch<AnyAction>) => {
        setTimeout(() => {
            // pretend to load an item
            dispatch( addProducts(sampleProducts))
        }, 500);
    }
}

type ProductAction = ReturnType<typeof addProducts | typeof addToCart>;

export function productsReducer(
    state = initialState,
    action: ProductAction
): ProductState {
    switch(action.type) {
        case 'products/ADD_PRODUCTS':
            return {
                ...state,
                products: [...state.products, ...action.payload],
            };

            // return p<ProductState>(state, (draftState) => {
            //     draftState.products.push(...action.payload);
            // });
        case 'products/ADD_TO_CART':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        id: action.payload.product.id,
                        quantity: action.payload.quantity
                    }
                ]
            };
            // return p<ProductState>(state, draftState => {
            //     draftState.cart.push({ 
            //         id: action.payload.product.id,
            //         quantity: action.payload.quantity 
            //     })
            // });
            
        default:
            return state;
    }
}