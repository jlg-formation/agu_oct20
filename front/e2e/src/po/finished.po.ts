import { browser, by, element } from 'protractor';

export class FinishedPage {
  async clickHomeBtn(): Promise<void> {
    await element(by.css('button')).click();
  }
}
