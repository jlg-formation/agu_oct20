import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService } from './quizz.service';

@Injectable({
  providedIn: 'root',
})
export class HttpQuizzService extends QuizzService {
  constructor(private http: HttpClient) {
    super();
    console.log('http service');
    this.load();
  }

  load(): void {
    this.http.get('http://localhost:3000/ws/quizz').subscribe({
      next: (data) => {
        console.log('data', data);
      },
      error: (err) => {
        console.log('err', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
