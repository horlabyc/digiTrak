import { TestBed } from '@angular/core/testing';

import { DiiTrackserviceService } from './dii-trackservice.service';

describe('DiiTrackserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiiTrackserviceService = TestBed.get(DiiTrackserviceService);
    expect(service).toBeTruthy();
  });
});
