import { browser, by, element } from 'protractor';
import { Question } from 'src/app/interfaces/question';

export class AddQuestionPage {
  async submit(): Promise<void> {
    await browser.sleep(1000);
    await element(by.cssContainingText('button', 'Ajouter')).click();
    await browser.sleep(1000);
  }

  async input(question: Question): Promise<void> {
    await browser.sleep(1000);
    const textarea = element(by.css('textarea'));
    await textarea.clear();
    await textarea.sendKeys(question.text);
    for (const i of [0, 1, 2, 3]) {
      await browser.sleep(1000);
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
