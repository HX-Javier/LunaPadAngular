import { TestBed } from '@angular/core/testing';

import { LunaService } from './luna.service';

describe('LunaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LunaService = TestBed.get(LunaService);
    expect(service).toBeTruthy();
  });
});
