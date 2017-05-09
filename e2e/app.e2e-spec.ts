import { AdventureTimePage } from './app.po';

describe('adventure-time App', () => {
  let page: AdventureTimePage;

  beforeEach(() => {
    page = new AdventureTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
