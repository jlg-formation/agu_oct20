import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoQuizzRoutingModule } from './do-quizz-routing.module';
import { DoQuizzComponent } from './do-quizz.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DoQuizzComponent, QuestionComponent, ScoreComponent],
  imports: [CommonModule, DoQuizzRoutingModule, FontAwesomeModule],
})
export class DoQuizzModule {}
