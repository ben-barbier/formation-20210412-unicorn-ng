import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornDetailsComponent } from './unicorn-details.component';

describe('UnicornDetailsComponent', () => {
  let component: UnicornDetailsComponent;
  let fixture: ComponentFixture<UnicornDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicornDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
