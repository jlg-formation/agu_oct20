import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';

import { CreateQuizzComponent } from './create-quizz.component';
import { FinishedComponent } from './finished/finished.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  { path: '', component: CreateQuizzComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'finished', component: FinishedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuizzRoutingModule { }
