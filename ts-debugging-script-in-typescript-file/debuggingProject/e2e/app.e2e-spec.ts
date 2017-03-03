import { DebuggingProjectPage } from './app.po';

describe('debugging-project App', function() {
  let page: DebuggingProjectPage;

  beforeEach(() => {
    page = new DebuggingProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
