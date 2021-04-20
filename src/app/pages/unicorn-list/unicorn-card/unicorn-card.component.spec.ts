import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnicornCardComponent } from './unicorn-card.component';

describe('UnicornCardComponent', () => {
    let component: UnicornCardComponent;
    let fixture: ComponentFixture<UnicornCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UnicornCardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UnicornCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
