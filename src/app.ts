import { chromium } from 'playwright'
import { config } from 'dotenv'
import login from './login.js';
import spam from './spam.js'
import { env } from 'process';

config();

const browser = await chromium.launch({
  headless: false,
});

const context = await browser.newContext();
const page = await browser.newPage();

await login(page);

const spam_interval = () => {
  spam(page)
};

// interval will run based on .env 
setInterval(spam_interval, Number(env.SC_INTERVAL));
