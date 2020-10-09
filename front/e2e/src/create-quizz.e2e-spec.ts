import { AppPage } from './po/app.po';
import { browser, logging } from 'protractor';
import { AddQuestionPage } from './po/add-question.po';
import { CreatePage } from './po/create.po';
import { FinishedPage } from './po/finished.po';
import { SetupPage } from './po/setup.po';
import { Question } from '../../src/app/interfaces/question';

describe('workspace-project App', () => {
  let page: AppPage;
  let createPage: CreatePage;
  let setupPage: SetupPage;
  let addQuestionPage: AddQuestionPage;
  let finishedPage: FinishedPage;

  beforeEach(() => {
    page = new AppPage();
    createPage = new CreatePage();
    setupPage = new SetupPage();
    addQuestionPage = new AddQuestionPage();
    finishedPage = new FinishedPage();
  });

  it('should create a quizz', async () => {
    await page.navigateTo();
    await page.clickOnCreateQuizzBtn();
    await createPage.input('Angular');
    await createPage.submit();
    await setupPage.clickOnAddQuestionBtn();
    await addQuestionPage.input({
      text: 'Quel est le nom du décorateur pour un service ?',
      answers: ['Service', 'NgService', 'Injectable', 'Class'],
      correctAnswer: 'C',
    } as Question);
    await addQuestionPage.submit();
    await setupPage.clickOnFinishBtn();
    await finishedPage.clickHomeBtn();
    expect(await page.isDoQuizzBtnEnabled()).toEqual(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
