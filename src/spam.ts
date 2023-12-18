import { Page } from 'playwright'
import { random_timeout } from './helpers.js';
import { env } from 'process';

const spam = async (page: Page) => {
  const chats = await page.$$('div[role="listitem"]');

  // start q at 2 because the first index will
  // be snap stories and the second snap ai
  for(let q: number = 2; q < chats.length; ++q) {
    await random_timeout(page); 
    chats[q].click();
    await page.locator('div[role="textbox"]').fill(env.SC_MSG);
    page.keyboard.press('Enter');
  }

};

export default spam