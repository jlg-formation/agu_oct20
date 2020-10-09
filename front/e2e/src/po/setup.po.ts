import { browser, by, element } from 'protractor';

export class SetupPage {
  async clickOnFinishBtn(): Promise<void> {
    await browser.sleep(1000);
    await element(by.cssContainingText('button', 'Terminer')).click();
    await browser.sleep(1000);
  }
  async clickOnAddQuestionBtn(): Promise<void> {
    await browser.sleep(1000);
    await element(by.cssContainingText('button', 'Ajouter')).click();
    await browser.sleep(1000);

  }
}
