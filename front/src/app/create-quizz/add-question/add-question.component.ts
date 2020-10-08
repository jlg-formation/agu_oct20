import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/interfaces/question';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  f = new FormGroup({
    text: new FormControl(
      'Quelle est la capitale de la France ?',
      Validators.required
    ),
    answers: new FormArray([
      new FormControl('Bruxelles', Validators.required),
      new FormControl('Paris', Validators.required),
      new FormControl('Moscou', Validators.required),
      new FormControl('Madrid', Validators.required),
    ]),
    correctAnswer: new FormControl('B', [
      Validators.required,
      Validators.pattern(/^[A-D]$/),
    ]),
  });
  constructor(
    private quizz: QuizzService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit question');
    this.quizz.addQuestion(this.f.value as Question);
    this.router.navigate(['../setup'], { relativeTo: this.route });
  }
}
