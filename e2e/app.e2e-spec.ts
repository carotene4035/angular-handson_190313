import { IgniteDemoPage } from './app.po';

describe('ignite-demo App', () => {
  let page: IgniteDemoPage;

  beforeEach(() => {
    page = new IgniteDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
