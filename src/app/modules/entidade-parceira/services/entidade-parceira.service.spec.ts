import { TestBed } from '@angular/core/testing';

import { EntidadeParceiraService } from './entidade-parceira.service';

describe('EntidadeParceiraService', () => {
  let service: EntidadeParceiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadeParceiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
