import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-quizz',
  templateUrl: './do-quizz.component.html',
  styleUrls: ['./do-quizz.component.scss'],
})
export class DoQuizzComponent implements OnInit {
  list = [{ name: 'titi' }, { name: 'toto' }, { name: 'tata' }];

  constructor() {}

  ngOnInit(): void {}
}
