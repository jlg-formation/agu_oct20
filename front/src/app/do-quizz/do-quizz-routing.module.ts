import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoQuizzComponent } from './do-quizz.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  { path: '', component: DoQuizzComponent },
  { path: 'question/:nbr', component: QuestionComponent },
  { path: 'score', component: ScoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoQuizzRoutingModule {}
