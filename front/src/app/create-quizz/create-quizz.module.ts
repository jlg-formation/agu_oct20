import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CreateQuizzRoutingModule } from './create-quizz-routing.module';
import { CreateQuizzComponent } from './create-quizz.component';
import { FinishedComponent } from './finished/finished.component';
import { SetupComponent } from './setup/setup.component';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  declarations: [
    CreateQuizzComponent,
    FinishedComponent,
    SetupComponent,
    AddQuestionComponent,
  ],
  imports: [CommonModule, CreateQuizzRoutingModule, FontAwesomeModule],
})
export class CreateQuizzModule {}
