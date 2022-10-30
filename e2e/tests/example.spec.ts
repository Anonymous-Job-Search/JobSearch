import { test, expect } from '@playwright/test';

test('Jobs test', async ({ page }) => {
  await page.goto('https://jobs.localhost/');

  await expect(page).toHaveTitle('Anonymous Job Search');
})
