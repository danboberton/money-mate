import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'Budget' }).click();

  await expect(page.getByRole('heading', { name: 'Budget View' })).toBeVisible();
});