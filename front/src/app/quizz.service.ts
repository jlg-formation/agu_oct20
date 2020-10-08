import { Injectable } from '@angular/core';
import { Question } from './interfaces/question';
import { Quizz } from './interfaces/quizz';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  
  current = this.getCurrent();
  constructor() {}

  getCurrent(): Partial<Quizz> {
    const str = localStorage.getItem('current');
    if (!str) {
      return undefined;
    }
    return JSON.parse(str) as Partial<Quizz>;
  }

  create(q: Partial<Quizz>): void {
    this.current = q;
    this.current.questions = [];
    this.saveCurrent();
  }

  saveCurrent(): void {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  addQuestion(question: Question): void {
    this.current.questions.push(question);
    this.saveCurrent();
  }
}
