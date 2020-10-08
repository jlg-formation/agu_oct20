import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  f = new FormGroup({
    correctAnswer: new FormControl('', Validators.required),
  });

  nbr = 0;

  constructor(
    public quizz: QuizzService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((data) => {
      this.nbr = +data.nbr;
      if (isNaN(this.nbr)) {
        this.router.navigateByUrl('/');
        return;
      }
    });
  }

  ngOnInit(): void {}

  submit(): void {
    const givenAnswer = this.f.value.correctAnswer;
    const correctAnswer = this.quizz.current.questions[this.nbr - 1]
      .correctAnswer;

    if (givenAnswer === correctAnswer) {
      this.quizz.progress.score++;
    }
    this.quizz.progress.currentQuestion++;
    this.quizz.saveProgress();
    if (this.nbr === this.quizz.current.questions.length) {
      this.router.navigate(['../../score'], { relativeTo: this.route });
      return;
    }

    this.router.navigate(['../' + (this.nbr + 1)], { relativeTo: this.route });
    this.f.reset();
  }
}
