import { createReducer, on } from '@ngrx/store';
import { toggleUnicornFromCart } from '../actions/cart.actions';
import { deleteUnicornSuccess } from '../actions/unicorns.actions';

const initialState: number[] = [];

export const cartReducer = createReducer(
    initialState,
    on(toggleUnicornFromCart, (state, { unicorn }) => {
        const isInCart = state.some(id => id === unicorn.id);
        if (isInCart) {
            return state.filter(id => id !== unicorn.id);
        }
        return [...state, unicorn.id];
    }),
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(id => id !== unicorn.id)),
);
