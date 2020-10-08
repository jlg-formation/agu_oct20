import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Quizz } from '../interfaces/quizz';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.scss'],
})
export class CreateQuizzComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl(`Les capitales d'Europe`, [Validators.required]),
  });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizz: QuizzService
  ) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
    this.quizz.create(this.f.value as Partial<Quizz>);
    this.router.navigate(['./setup'], { relativeTo: this.route });
  }
}
