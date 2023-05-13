import { TestBed } from '@angular/core/testing';

import { CiapService } from './ciap.service';

describe('CiapService', () => {
  let service: CiapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
