import { TestBed } from '@angular/core/testing';

import { MonsterListService } from './monster-list.service';

describe('MonsterListService', () => {
  let service: MonsterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
