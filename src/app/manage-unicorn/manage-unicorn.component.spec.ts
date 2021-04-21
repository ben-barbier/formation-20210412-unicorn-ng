import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageUnicornComponent } from './manage-unicorn.component';

describe('ManageUnicornComponent', () => {
    let component: ManageUnicornComponent;
    let fixture: ComponentFixture<ManageUnicornComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ManageUnicornComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ManageUnicornComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
