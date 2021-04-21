import { createReducer, on } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { deleteUnicornSuccess, getUnicornsSuccess, updateUnicornSuccess } from '../actions/unicorns.actions';

const initialState: Unicorn[] = [];

export const unicornsReducer = createReducer(
    initialState,
    on(getUnicornsSuccess, (state, { unicorns }) => unicorns),
    on(updateUnicornSuccess, (state, { unicorn }) => state.map(u => (u.id === unicorn.id ? unicorn : u))),
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u.id !== unicorn.id)),
);
