import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UnicornWithCapacitiesLabels } from '../../shared/models/unicorn.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: UnicornWithCapacitiesLabels | undefined;
    @Output() private removed = new EventEmitter<void>();

    public isInCart$: Observable<boolean> = of(false);

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        if (this.unicorn) {
            this.isInCart$ = this.cartService.isInCart$(this.unicorn);
        }
    }

    public remove(): void {
        this.removed.emit();
    }

    public toggleToCart(): void {
        if (!this.unicorn) {
            return;
        }

        this.cartService.toggleToCart(this.unicorn);
    }
}
