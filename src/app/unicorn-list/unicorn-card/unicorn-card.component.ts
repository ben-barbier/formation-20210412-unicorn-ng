import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
    @Input() public unicorn: Unicorn | undefined;
    @Output() private removed = new EventEmitter<void>();

    public age: number | undefined;

    ngOnInit(): void {
        if (this.unicorn) {
            this.age = new Date().getFullYear() - this.unicorn.birthyear;
        }
    }

    public remove(): void {
        this.removed.emit();
    }
}
