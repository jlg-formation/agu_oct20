import { browser, by, element } from 'protractor';

export class AppPage {
  isDoQuizzBtnEnabled(): any {
    throw new Error('Method not implemented.');
  }
  clickOnCreateQuizzBtn() {
    throw new Error('Method not implemented.');
  }
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('header span')).getText() as Promise<string>;
  }
}
