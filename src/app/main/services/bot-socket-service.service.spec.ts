import { TestBed } from '@angular/core/testing';

import { BotSocketServiceService } from './bot-socket-service.service';

describe('BotSocketServiceService', () => {
  let service: BotSocketServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotSocketServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
