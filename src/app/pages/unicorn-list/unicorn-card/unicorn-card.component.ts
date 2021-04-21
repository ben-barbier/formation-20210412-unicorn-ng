import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartDispatchers } from '../../../store/dispatchers/cart.dispatchers';
import { UnicornsDispatchers } from '../../../store/dispatchers/unicorns.dispatchers';
import { CartSelectors } from '../../../store/selectors/cart.selectors';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: Unicorn | undefined;

    public isInCart$: Observable<boolean> = of(false);

    constructor(
        private unicornsDispatchers: UnicornsDispatchers,
        private cartSelectors: CartSelectors,
        private cartDispatchers: CartDispatchers,
    ) {}

    ngOnInit(): void {
        if (this.unicorn) {
            this.isInCart$ = this.cartSelectors.isInCart$(this.unicorn);
        }
    }

    public remove(): void {
        this.unicorn && this.unicornsDispatchers.deleteUnicorn(this.unicorn);
    }

    public toggleToCart(): void {
        this.unicorn && this.cartDispatchers.toggleUnicornFromCart(this.unicorn);
    }

    public getAge(birthyear: number) {
        console.count('getAge');
        return new Date().getFullYear() - birthyear;
    }
}
