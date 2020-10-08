import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.scss'],
})
export class CreateQuizzComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl(`Les capitales d'Europe`, [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}
}
