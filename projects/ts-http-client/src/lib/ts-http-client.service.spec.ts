import { TestBed } from '@angular/core/testing';

import { TsHttpClientService } from './ts-http-client.service';

describe('TsHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TsHttpClientService = TestBed.get(TsHttpClientService);
    expect(service).toBeTruthy();
  });
});
