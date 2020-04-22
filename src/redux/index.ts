import { combineReducers } from 'redux';
import { userReducer } from './modules/users';
import { productsReducer } from './modules/products';

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}


export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

