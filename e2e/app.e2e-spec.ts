import { Angular4LazyLoadingComponentPage } from './app.po';

describe('angular4-lazy-loading-component App', () => {
  let page: Angular4LazyLoadingComponentPage;

  beforeEach(() => {
    page = new Angular4LazyLoadingComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
