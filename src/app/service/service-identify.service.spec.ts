import { TestBed } from '@angular/core/testing';

import { ServiceIdentifyService } from './service-identify.service';

describe('ServiceIdentifyService', () => {
  let service: ServiceIdentifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIdentifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
