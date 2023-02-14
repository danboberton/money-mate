# Data

I thought the app could use 3 main datastructures from the database. A transaction (multiple) and a budget (single).

## Transaction
A single banking transaction will contain:

| name                 | description                                                                                                                                                                                                                                                                                                                |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| txID                 | a unique transaction ID, some long hash                                                                                                                                                                                                                                                                                    |
| cost                 | an amount of money, can be positive or negative                                                                                                                                                                                                                                                                            |
| date                 | the date and time of a transaction                                                                                                                                                                                                                                                                                         |
| description          | a string containing a description of the transaction                                                                                                                                                                                                                                                                       |
| budgetClassification | the chosen budget category this transaction will be applied to. This could be a list, to allow different budgets to be loaded over the same transactions.                                                                                                                                                                  |
| month                | the month (as a number) that this classification will be applied to. Even though a transaction occurred on the last day of the month, maybe it's supposed to be applied to the next month's budget. Like if you got paid at the end of the month, you'd want that positive amount to be applied to the next month's budget |

## Budget

| name               | description                                                     |
|--------------------|-----------------------------------------------------------------|
| budgetID           | a unique ID identifying the budget                              |
| budgetName         | a human readable name for the user to identify the budget       |
| budgetCategories[] | A list of budgetCategory items, all the budget categories       |
| budgetStartDay     | maybe the budget should start on the 2nd day of the month, etc. |

## BudgetCategory

| name     | description                                                                            |
|----------|----------------------------------------------------------------------------------------|
| category | the type of budget category "groceries", "auto", etc.                                  |
| amount   | the amount of money allocated to the budget                                            |
| type     | budget amounts could be [monthlyExpense, monthlyIncome, runningExpense, runningIncome] |

