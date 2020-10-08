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
    console.log('submit');
  }
}
