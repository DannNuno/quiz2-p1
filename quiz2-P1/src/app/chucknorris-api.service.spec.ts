import { TestBed } from '@angular/core/testing';

import { ChucknorrisApiService } from './chucknorris-api.service';

describe('ChucknorrisApiService', () => {
  let service: ChucknorrisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChucknorrisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
