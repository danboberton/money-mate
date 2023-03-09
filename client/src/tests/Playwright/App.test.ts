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
  await expect(page.getByRole('heading', { name: 'Budget Info' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Transactions' })).toBeVisible();
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

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('menuitem', { name: 'Budget' }).click();
  
  await expect(page.getByRole('heading', { name: 'Budget View' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Budget Info' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Transactions' })).toBeVisible();
});

test('Test that budget page has Transactions section', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Budget' }).click();

  await expect(page.getByRole('heading', { name: 'Transactions' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Date' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Time' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Amount' })).toBeVisible();
  await expect(page.getByRole('row', { name: 'Date Time Amount Category' }).getByRole('columnheader', { name: 'Category' })).toBeVisible();
});