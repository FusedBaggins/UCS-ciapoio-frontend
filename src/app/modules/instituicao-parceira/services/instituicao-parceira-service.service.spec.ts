import { TestBed } from '@angular/core/testing';

import { InstituicaoParceiraServiceService } from './instituicao-parceira-service.service';

describe('InstituicaoParceiraServiceService', () => {
  let service: InstituicaoParceiraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituicaoParceiraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
