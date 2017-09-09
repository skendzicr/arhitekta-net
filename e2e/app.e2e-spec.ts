import { ArhitektaNetPage } from './app.po';

describe('arhitekta-net App', () => {
  let page: ArhitektaNetPage;

  beforeEach(() => {
    page = new ArhitektaNetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
