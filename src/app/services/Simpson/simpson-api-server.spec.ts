import { TestBed } from '@angular/core/testing';

import { SimpsonApiServer } from './simpson-api-server';

describe('SimpsonApiServer', () => {
  let service: SimpsonApiServer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpsonApiServer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
