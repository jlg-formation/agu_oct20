import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateQuizzComponent } from './create-quizz.component';

const routes: Routes = [{ path: '', component: CreateQuizzComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuizzRoutingModule { }
