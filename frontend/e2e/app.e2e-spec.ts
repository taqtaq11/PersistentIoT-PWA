import { PersistentIoTPWAPage } from './app.po';

describe('persistent-io-t-pwa App', function() {
  let page: PersistentIoTPWAPage;

  beforeEach(() => {
    page = new PersistentIoTPWAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
