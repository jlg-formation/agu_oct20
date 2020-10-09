import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<void> {
    await browser.get(browser.baseUrl);
  }

  getTitleText(): Promise<string> {
    return element(by.css('header span')).getText() as Promise<string>;
  }

  async clickOnCreateQuizzBtn(): Promise<void> {
    const btn = element(by.css('button[routerLink="/create"]'));
    await btn.click();
  }

  async isDoQuizzBtnEnabled(): Promise<boolean> {
    const btn = element(by.css('button[routerLink="/list"]'));
    const isEnabled = await btn.isEnabled();
    return isEnabled;
  }
}
