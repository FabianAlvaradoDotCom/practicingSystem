import { PracticingSystemPage } from './app.po';

describe('practicing-system App', () => {
  let page: PracticingSystemPage;

  beforeEach(() => {
    page = new PracticingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
