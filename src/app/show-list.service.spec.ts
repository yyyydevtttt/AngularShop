import { TestBed, inject } from '@angular/core/testing';

import { ShowListService } from './show-list.service';

describe('ShowListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowListService]
    });
  });

  it('should be created', inject([ShowListService], (service: ShowListService) => {
    expect(service).toBeTruthy();
  }));
});
