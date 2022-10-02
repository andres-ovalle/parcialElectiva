import { TestBed } from '@angular/core/testing';

import { RickandMortyApiService } from './rickand-morty-api.service';

describe('RickandMortyApiService', () => {
  let service: RickandMortyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickandMortyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
