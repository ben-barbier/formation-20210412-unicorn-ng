import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { toggleUnicornFromCart } from '../actions/cart.actions';
import { EntityState } from '../reducers';

@Injectable({ providedIn: 'root' })
export class CartDispatchers {
    constructor(private store: Store<EntityState>) {}

    public toggleUnicornFromCart(unicorn: Unicorn): void {
        this.store.dispatch(toggleUnicornFromCart({ unicorn }));
    }
}
