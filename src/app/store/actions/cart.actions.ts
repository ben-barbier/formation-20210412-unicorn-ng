import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

// 🎯 cart
export const toggleUnicornFromCart = createAction('[Cart] TOGGLE_UNICORN_FROM_CART', props<{ unicorn: Unicorn }>());
