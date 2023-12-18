import { Page } from "playwright";

export const random_num = (min: number, max: number) => {
  const ran = Math.floor(Math.random() * (max - min) + min);
  console.log(ran);
  return ran;
};

export const random_timeout = async (page: Page) => {
  await page.waitForTimeout(random_num(2000, 5000));
};