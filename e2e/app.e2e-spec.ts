import { SDRFrontEndPage } from './app.po';

describe('sdr-front-end App', () => {
  let page: SDRFrontEndPage;

  beforeEach(() => {
    page = new SDRFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
