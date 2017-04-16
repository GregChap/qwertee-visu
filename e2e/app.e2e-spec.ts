import { QwerteeVisuPage } from './app.po';

describe('qwertee-visu App', () => {
  let page: QwerteeVisuPage;

  beforeEach(() => {
    page = new QwerteeVisuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
