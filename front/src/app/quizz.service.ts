import { Injectable } from '@angular/core';
import { Question } from './interfaces/question';
import { Quizz } from './interfaces/quizz';
import { QuizzMap } from './interfaces/quizz-map';
import { QuizzProgress } from './interfaces/quizz-progress';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  map = this.getMap();
  current = this.getCurrent();
  progress = this.getProgress();
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

  getProgress(): QuizzProgress {
    const str = localStorage.getItem('progress');
    if (!str) {
      return undefined;
    }
    return JSON.parse(str) as QuizzProgress;
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

  saveProgress(): void {
    localStorage.setItem('progress', JSON.stringify(this.progress));
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

  getList(): Quizz[] {
    return Object.values(this.map);
  }

  setCurrent(q: Quizz): void {
    this.current = q;
    this.saveCurrent();
  }

  start(q: Quizz): void {
    this.setCurrent(q);
    this.progress = {
      score: 0,
      currentQuestion: 0,
    };
    this.saveProgress();
  }
}
