import { TestBed } from '@angular/core/testing';

import { VaraService } from './vara.service';

describe('VaraService', () => {
  let service: VaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
