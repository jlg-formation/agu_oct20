import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService } from './quizz.service';
import { QuizzMap } from './interfaces/quizz-map';
import { Quizz } from './interfaces/quizz';

const url = 'http://localhost:3000/ws/quizz';

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
    this.http.get<QuizzMap>(url).subscribe({
      next: (map) => {
        console.log('map', map);
        this.map = map;
        this.saveMap();
      },
      error: (err) => {
        console.log('err', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  addCurrentQuizzToMap(): void {
    super.addCurrentQuizzToMap();
    this.post(this.current as Quizz);
  }

  post(q: Quizz): void {
    this.http.post<void>(url, q).subscribe({
      next: () => {
        console.log('added ok');
        this.load();
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
