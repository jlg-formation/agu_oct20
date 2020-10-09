import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Quizz } from 'src/app/interfaces/quizz';
import { QuizzProgress } from 'src/app/interfaces/quizz-progress';
import { QuizzService } from 'src/app/quizz.service';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let service: QuizzService;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [QuestionComponent],
    }).compileComponents();
    service = TestBed.inject(QuizzService);
    service.current = {
      name: 'toto',
      questions: [
        { text: 'qqq', answers: ['', '', '', ''], correctAnswer: 'C' },
      ],
    } as Quizz;
    service.progress = {
      score: 0,
      currentQuestion: 0,
    } as QuizzProgress;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.nbr = 1;
    fixture.detectChanges();
  });

  afterEach(() => {
    service.current = undefined;
    service.progress = undefined;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call submit', () => {
    component.submit();
    expect(component).toBeTruthy();
  });

  it('should call submit with 2 questions', () => {
    component.f.setValue({ correctAnswer: 'C' });
    service.current = {
      name: 'toto',
      questions: [
        { text: 'qqq', answers: ['', '', '', ''], correctAnswer: 'C' },
        { text: 'qqq', answers: ['', '', '', ''], correctAnswer: 'C' },
      ],
    } as Quizz;
    component.submit();
    expect(component).toBeTruthy();
  });
});
