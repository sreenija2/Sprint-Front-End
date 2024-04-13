import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalGoldTransactionsComponent } from './physical-gold-transactions.component';

describe('PhysicalGoldTransactionsComponent', () => {
  let component: PhysicalGoldTransactionsComponent;
  let fixture: ComponentFixture<PhysicalGoldTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalGoldTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalGoldTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
