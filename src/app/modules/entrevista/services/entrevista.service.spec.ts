import { TestBed } from '@angular/core/testing';

import { EntrevistaService } from './entrevista.service';

describe('EntrevistaServiceService', () => {
  let service: EntrevistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrevistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
