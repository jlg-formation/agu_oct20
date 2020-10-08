import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoQuizzComponent } from './do-quizz.component';

const routes: Routes = [{ path: '', component: DoQuizzComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoQuizzRoutingModule { }
