import { TestBed } from '@angular/core/testing';

import { NgxCustomCompsService } from './ngx-custom-comps.service';

describe('NgxCustomCompsService', () => {
  let service: NgxCustomCompsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCustomCompsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
