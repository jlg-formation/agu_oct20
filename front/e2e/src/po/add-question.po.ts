import { browser, by, element } from 'protractor';
import { Question } from 'src/app/interfaces/question';

export class AddQuestionPage {
  async submit(): Promise<void> {
    await element(by.cssContainingText('button', 'Ajouter')).click();
  }

  async input(question: Question): Promise<void> {
    const textarea = element(by.css('textarea'));
    await textarea.clear();
    await textarea.sendKeys(question.text);
    for (const i of [0, 1, 2, 3]) {
      const inp = element(by.css(`.first-col input[ng-reflect-name="${i}"]`));
      await inp.clear();
      await inp.sendKeys(question.answers[i]);
    }
    const input = element(
      by.css(
        `.correct-answer input[ng-reflect-value="${question.correctAnswer}"]`
      )
    );
    await input.click();
  }
}
