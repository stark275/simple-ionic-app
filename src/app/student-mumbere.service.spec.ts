import { TestBed } from '@angular/core/testing';

import { StudentMumbereService } from './student-mumbere.service';

describe('StudentMumbereService', () => {
  let service: StudentMumbereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentMumbereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
