import { TestBed } from '@angular/core/testing';

import { PasswordstrengthService } from './passwordstrength.service';

describe('PasswordstrengthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordstrengthService = TestBed.get(PasswordstrengthService);
    expect(service).toBeTruthy();
  });
});
