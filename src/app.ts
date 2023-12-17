import { chromium } from 'playwright'
import { config } from 'dotenv'

config();

const browser = await chromium.launch({
  headless: false,
});

const context = await browser.newContext();
const page = await browser.newPage();

page.goto('https://pornhub.com');

page.waitForTimeout(10000);
