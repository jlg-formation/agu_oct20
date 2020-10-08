import { Question } from './question';

export interface Quizz {
  name: string;
  questions: Question[];
}
