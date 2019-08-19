import { TestBed } from '@angular/core/testing';

import { IMConfigService } from './imconfig.service';

describe('IMConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IMConfigService = TestBed.get(IMConfigService);
    expect(service).toBeTruthy();
  });
});
