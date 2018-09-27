import { TestBed } from '@angular/core/testing';

import { PokeServiceService } from './poke-service.service';

describe('PokeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeServiceService = TestBed.get(PokeServiceService);
    expect(service).toBeTruthy();
  });
});
