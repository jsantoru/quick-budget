import { QuickBudgetPage } from './app.po';

describe('quick-budget App', function() {
  let page: QuickBudgetPage;

  beforeEach(() => {
    page = new QuickBudgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
