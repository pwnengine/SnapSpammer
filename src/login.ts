import { Page } from 'playwright'
import { random_timeout } from './helpers.js'
import { env } from 'process';

// the purpose of waiting for a random timeout is 
// possible anti-bot detection when authentication
const login = async (page: Page) => {
  await page.goto('https://accounts.snapchat.com/accounts/v2/login', {
    waitUntil: 'networkidle',
  });

  await random_timeout(page);
  await page.locator('input[name="accountIdentifier"]').fill(env.SC_EMAIL);

  await random_timeout(page);
  await page.locator('button[type="submit"]').click();

  await random_timeout(page);
  await page.locator('input[name="password"]').fill(env.SC_PASS);

  await random_timeout(page);
  await page.locator('button[type="submit"]').click();

  // check to see if we hit the welcome url
  try {
    page.waitForURL('https://accounts.snapchat.com/v2/welcome', {
      waitUntil: 'networkidle',
    });
  } catch(err) {
    console.log('didn\'t get to welcome url | ERROR: ' + err);
  }

  await random_timeout(page);
  await page.locator('div[class="WebChatBanner_title__IRFwS"]').click();
  
  // click out of popup
  await random_timeout(page);
  await page.getByText('Not now', { exact: true }).click();
};

export default login