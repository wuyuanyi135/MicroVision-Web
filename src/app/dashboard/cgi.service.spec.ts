import { TestBed } from '@angular/core/testing';

import { CgiService } from './cgi.service';

describe('CgiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CgiService = TestBed.get(CgiService);
    expect(service).toBeTruthy();
  });
});
