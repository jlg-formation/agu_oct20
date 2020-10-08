import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-do-quizz',
  templateUrl: './do-quizz.component.html',
  styleUrls: ['./do-quizz.component.scss'],
})
export class DoQuizzComponent implements OnInit {
  constructor(public quizz: QuizzService) {}

  ngOnInit(): void {}
}
