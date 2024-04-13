import { TestBed } from '@angular/core/testing';

import { PhysicalGoldTransactionsService } from './physical-gold-transactions.service';

describe('PhysicalGoldTransactionsService', () => {
  let service: PhysicalGoldTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicalGoldTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
