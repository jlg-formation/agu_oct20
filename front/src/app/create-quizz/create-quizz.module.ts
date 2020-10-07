import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuizzRoutingModule } from './create-quizz-routing.module';
import { CreateQuizzComponent } from './create-quizz.component';
import { FinishedComponent } from './finished/finished.component';
import { SetupComponent } from './setup/setup.component';
import { AddQuestionComponent } from './add-question/add-question.component';


@NgModule({
  declarations: [CreateQuizzComponent, FinishedComponent, SetupComponent, AddQuestionComponent],
  imports: [
    CommonModule,
    CreateQuizzRoutingModule
  ]
})
export class CreateQuizzModule { }
