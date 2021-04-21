import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { UnicornsDispatchers } from '../../../store/dispatchers/unicorns.dispatchers';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: Unicorn | undefined;

    public isInCart$: Observable<boolean> = of(false);

    constructor(private cartService: CartService, private unicornsDispatchers: UnicornsDispatchers) {}

    ngOnInit(): void {
        if (this.unicorn) {
            this.isInCart$ = this.cartService.isInCart$(this.unicorn);
        }
    }

    public remove(): void {
        this.unicorn && this.unicornsDispatchers.deleteUnicorn(this.unicorn);
    }

    public toggleToCart(): void {
        if (!this.unicorn) {
            return;
        }

        this.cartService.toggleToCart(this.unicorn);
    }

    public getAge(birthyear: number) {
        console.count('getAge');
        return new Date().getFullYear() - birthyear;
    }
}
