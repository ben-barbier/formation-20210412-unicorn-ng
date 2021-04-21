import { ActionReducerMap } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { unicornsReducer } from './unicorns.reducers';

export interface EntityState {
    unicorns: Unicorn[];
    // cart: number[]; // Identifiants de licornes
}

export const reducers: ActionReducerMap<EntityState> = {
    unicorns: unicornsReducer,
    // cart: cartReducer,
    // here is where i put other reducers, when i have them
};
