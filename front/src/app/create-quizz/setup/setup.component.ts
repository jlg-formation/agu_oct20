import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  constructor(
    public quizz: QuizzService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  finish(): void {
    this.quizz.addCurrentQuizzToMap();
    this.router.navigate(['../finished'], { relativeTo: this.route });
  }
}
