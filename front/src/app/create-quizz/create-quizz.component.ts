import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.scss'],
})
export class CreateQuizzComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl(`Les capitales d'Europe`, [Validators.required]),
  });
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
    this.router.navigate(['./setup'], { relativeTo: this.route });
  }
}
