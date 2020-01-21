import { TestBed } from '@angular/core/testing';

import { Round1Service } from './round1.service';

describe('Round1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Round1Service = TestBed.get(Round1Service);
    expect(service).toBeTruthy();
  });
});
