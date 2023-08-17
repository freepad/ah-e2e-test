import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000'; 

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
    const resultsSelector = 'h1';
    await page.waitForSelector(resultsSelector);
  
    const title = await page.evaluate(() => document.querySelector('h1').innerHTML);
  
    expect(title).toBe('Hello, from Netology!')

  });
});
