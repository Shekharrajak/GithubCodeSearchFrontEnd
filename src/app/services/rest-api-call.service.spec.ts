import { TestBed, inject } from '@angular/core/testing';

import { RestApiCallService } from './rest-api-call.service';

describe('RestApiCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestApiCallService]
    });
  });

  it('should be created', inject([RestApiCallService], (service: RestApiCallService) => {
    expect(service).toBeTruthy();
  }));
});
