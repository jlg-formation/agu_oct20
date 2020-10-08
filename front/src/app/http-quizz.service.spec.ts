import { TestBed } from '@angular/core/testing';

import { HttpQuizzService } from './http-quizz.service';

describe('HttpQuizzService', () => {
  let service: HttpQuizzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpQuizzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
