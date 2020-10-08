import { Injectable } from '@angular/core';
import { Question } from './interfaces/question';
import { Quizz } from './interfaces/quizz';
import { QuizzMap } from './interfaces/quizz-map';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  map = this.getMap();
  current = this.getCurrent();
  constructor() {}

  getCurrent(): Partial<Quizz> {
    const str = localStorage.getItem('current');
    if (!str) {
      return undefined;
    }
    return JSON.parse(str) as Partial<Quizz>;
  }

  getMap(): QuizzMap {
    const str = localStorage.getItem('map');
    if (!str) {
      return {};
    }
    return JSON.parse(str) as QuizzMap;
  }

  create(q: Partial<Quizz>): void {
    this.current = q;
    this.current.questions = [];
    this.saveCurrent();
  }

  saveCurrent(): void {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  saveMap(): void {
    localStorage.setItem('map', JSON.stringify(this.map));
  }

  addQuestion(question: Question): void {
    this.current.questions.push(question);
    this.saveCurrent();
  }

  addCurrentQuizzToMap(): void {
    this.map[this.current.name] = this.current as Quizz;
    this.saveMap();
  }

  isMapEmpty(): boolean {
    return Object.keys(this.map).length === 0;
  }
}
