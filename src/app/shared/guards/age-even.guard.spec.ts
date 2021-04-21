import { TestBed } from '@angular/core/testing';
import { AgeEvenGuard } from './age-even.guard';

describe('AgeEvenGuard', () => {
    let guard: AgeEvenGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(AgeEvenGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
