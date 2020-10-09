import { browser, by, element } from 'protractor';

export class FinishedPage {
  async clickHomeBtn(): Promise<void> {
    await browser.sleep(1000);

    await element(by.css('button')).click();
  }
}
