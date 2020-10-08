import { Injectable } from '@angular/core';
import { Quizz } from './interfaces/quizz';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  current: Partial<Quizz>;
  constructor() {}

  create(q: Partial<Quizz>): void {
    this.current = q;
  }
}
