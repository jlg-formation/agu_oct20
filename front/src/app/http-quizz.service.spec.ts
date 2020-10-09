import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpQuizzService } from './http-quizz.service';

describe('HttpQuizzService', () => {
  let service: HttpQuizzService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    localStorage.setItem(
      'current',
      JSON.stringify({ name: 'toto', questions: [] })
    );
    service = TestBed.inject(HttpQuizzService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    const r = http.expectOne(`/ws/quizz`);
    expect(r.request.method).toBe('GET');
    r.flush({});
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const r = http.expectOne(`/ws/quizz`);
    expect(r.request.method).toBe('GET');
    r.flush('', { status: 404, statusText: 'not found' });
    expect(service).toBeTruthy();
  });

  it('should add a quizz', () => {
    const r = http.expectOne(`/ws/quizz`);
    expect(r.request.method).toBe('GET');
    r.flush({});

    service.addCurrentQuizzToMap();
    const r2 = http.expectOne(`/ws/quizz`);
    expect(r2.request.method).toBe('POST');
    r2.flush('');
    const r3 = http.expectOne(`/ws/quizz`);
    expect(r3.request.method).toBe('GET');
    r3.flush({});
    expect(service).toBeTruthy();
  });

  it('should add a quizz in error', () => {
    const r = http.expectOne(`/ws/quizz`);
    expect(r.request.method).toBe('GET');
    r.flush({});

    service.post(undefined);
    const r2 = http.expectOne(`/ws/quizz`);
    expect(r2.request.method).toBe('POST');
    r2.flush('', { statusText: 'method not allowed', status: 405 });
    expect(service).toBeTruthy();
  });
});
