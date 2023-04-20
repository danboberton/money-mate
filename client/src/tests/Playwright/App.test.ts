import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/money-mate/);
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
  await expect(page.getByRole('columnheader', { name: 'Amount' })).toBeVisible();
  await expect(page.getByRole('row', { name: 'Date Amount Category' }).getByRole('columnheader', { name: 'Category' })).toBeVisible();
});

test('Test that transaction table can be filtered', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Budget' }).click();

  await page.getByRole('columnheader', { name: 'Filter' }).locator('svg').click();

  await expect(page.getByText('Start Date')).toBeVisible();
  await expect(page.getByText('End Date')).toBeVisible();
  await expect(page.getByText('Minimum Amount')).toBeVisible();
  await expect(page.getByText('Maximum Amount')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Category' })).toBeVisible();

  await page.getByRole('combobox').selectOption('Utilities');
  await page.getByRole('button', { name: 'Apply Filters' }).click();
  await expect(page.getByRole('row', { name: '2001-03-11 13:19:17 149.85 Utilities' }).getByText('Utilities')).toBeVisible();
});

test('Test that transaction table can be sorted', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Budget' }).click();

  await page.getByRole('button', { name: 'Category' }).click();
  await expect(page.getByRole('row', { name: '2002-04-27 21:34:46 10.62 Auto' }).getByText('Auto')).toBeVisible();
});


