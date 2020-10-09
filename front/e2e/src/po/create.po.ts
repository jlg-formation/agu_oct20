import { browser, by, element } from 'protractor';

export class CreatePage {
  async submit(): Promise<void> {
    await browser.sleep(1000);
    await element(by.css('button')).click();
  }
  async input(name: string): Promise<void> {
    await browser.sleep(1000);
    const input = element(by.css('input'));
    await input.clear();
    await input.sendKeys(name);
  }
}
