import { TestBed } from '@angular/core/testing';

import { SignalrService } from './signalr.service';
import { ConfigService } from './config.service';

describe('SignalrService', () => {
  let service: SignalrService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: ConfigService, useValue: { config: { SignalRBasePath: '' } } }],
    }),
  );

  beforeEach(() => (service = TestBed.get(SignalrService)));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
