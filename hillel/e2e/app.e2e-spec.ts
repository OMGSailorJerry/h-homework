import { HillelPage } from './app.po';

describe('hillel App', () => {
  let page: HillelPage;

  beforeEach(() => {
    page = new HillelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
