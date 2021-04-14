import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private readonly _cart$ = new BehaviorSubject<Unicorn[]>([]);
    public readonly cart$ = this._cart$.asObservable();

    private addToCart(unicorn: Unicorn): void {
        this._cart$.next([...this._cart$.getValue(), unicorn]);
    }

    private removeFromCart(unicornToRemove: Unicorn): void {
        const actualCart = this._cart$.getValue();
        const cartWithoutUnicorn = actualCart.filter(unicorn => unicorn.id !== unicornToRemove.id);
        this._cart$.next(cartWithoutUnicorn);
    }

    public isInCart$(unicorn: Unicorn): Observable<boolean> {
        return this.cart$.pipe(map(cart => cart.some(u => u.id === unicorn.id)));
    }

    public isInCart(unicorn: Unicorn): boolean {
        return this._cart$.getValue().some(u => u.id === unicorn.id);
    }

    public toggleToCart(unicorn: Unicorn): void {
        if (this.isInCart(unicorn)) {
            this.removeFromCart(unicorn);
        } else {
            this.addToCart(unicorn);
        }
    }
}
