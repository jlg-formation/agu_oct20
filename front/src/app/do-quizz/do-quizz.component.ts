import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quizz } from '../interfaces/quizz';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-do-quizz',
  templateUrl: './do-quizz.component.html',
  styleUrls: ['./do-quizz.component.scss'],
})
export class DoQuizzComponent implements OnInit {
  constructor(
    public quizz: QuizzService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  start(q: Quizz): void {
    console.log('start', q);
    this.quizz.start(q);
    this.router.navigate(['./question/1'], { relativeTo: this.route });
  }
}
