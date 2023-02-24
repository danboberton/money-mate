import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/React App/);
});

test('Test that the Budget button on the homepage can be clicked and Headers are visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  
  await expect(page.getByRole('banner')).toBeVisible();
  await expect(page.getByRole('banner')).toHaveText('Money Mate');

  await page.getByRole('button', { name: 'Budget' }).click();

  await expect(page.getByRole('heading', { name: 'Budget View' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'BudgetSettings' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Budget Analysis' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Transaction Table' })).toBeVisible();
});

test('Test that the Menu can be opened and closed, and the correct options are visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'Open Menu' }).click();

  await expect(page.getByRole('menuitem', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Budget' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Profile' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Settings' })).toBeVisible();

  await page.getByRole('button', { name: 'Close Menu' }).click();
});

test('Test that the Menu can be opened and budget can be accessed', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'Open Menu' }).click();

  await page.getByRole('menuitem', { name: 'Budget' }).click();

  await expect(page.getByRole('heading', { name: 'Budget View' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'BudgetSettings' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Budget Analysis' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Transaction Table' })).toBeVisible();
});