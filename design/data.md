# Data Types

Definitions and descriptions of data types used in API calls and in the database.

## Transaction
A single banking transaction will contain:

| name                  | description                                                                                                                                                                                                                                                                                                                |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| txID                  | a unique transaction ID, some long hash                                                                                                                                                                                                                                                                                    |
| cost                  | an amount of money, can be positive or negative                                                                                                                                                                                                                                                                            |
| date                  | the date and time of a transaction                                                                                                                                                                                                                                                                                         |
| description           | a string containing a description of the transaction                                                                                                                                                                                                                                                                       |
| budgetClassifications | the chosen budget category this transaction will be applied to. This could be a list, to allow different budgets to be loaded over the same transactions.                                                                                                                                                                  |
| month                 | the month (as a number) that this classification will be applied to. Even though a transaction occurred on the last day of the month, maybe it's supposed to be applied to the next month's budget. Like if you got paid at the end of the month, you'd want that positive amount to be applied to the next month's budget |

### Structure Example:
2 transactions, the second being uncategorized (budgetClassification: null)
```
{
    "txID": 85822413,
    "cost": -70814.02,
    "date": "2010-05-12 14:12:25",
    "description": "Eius dolor tempora consectetur sed.",
    "budgetClassifications": "Groceries",
    "month": 12
  },
  {
    "txID": 73197858,
    "cost": -77208.58,
    "date": "2002-01-31 15:04:16",
    "description": "Amet dolorem eius numquam.",
    "budgetClassifications": null,
    "month": 10
  }

```

## Budget
A budget is a named collection of budget categories with some additional config (budgetStartDay). Maybe a user could apply different budgets across the same set of transactions to compare outcomes.

| name                | description                                                                                                                                                                                           |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| budgetID            | a unique ID identifying the budget                                                                                                                                                                    |
| budgetName          | a human readable name for the user to identify the budget                                                                                                                                             |
| budgetCategories [] | A list of budgetCategory items, all the budget categories                                                                                                                                             |
| budgetStartDay      | maybe the budget should start on the 2nd day of the month, etc. Maybe this could be a negative number? Maybe you get paid on the last day of the month and you wanted the budget month to start then? |

### Structure Example:
Note the budgetCategory data type is implemented with a list of bugetCategories.
```
{
  "budgetID": "007",
  "budgetName": "Mock Budget",
  "budgetCategories": [
    {
      "category": "Regular Salary",
      "amount": 300.00,
      "type": "monthlyIncome"
    },
    {
      "category": "Groceries",
      "amount": 300.00,
      "type": "monthlyExpense"
    }
  ],
  "budgetStartDay": 1
}
```
## BudgetCategory
A single category with a name

| name     | description                                             |
|----------|---------------------------------------------------------|
| category | the type of budget category "groceries", "auto", etc.   |
| amount   | the amount of money allocated to the budget             |
| type     | budget amounts could be [monthlyExpense, monthlyIncome] |

TODO: implement runningExpense, runningIncome?

### Structure Example:
In the case of monthly income, a budget category would represent the amount of expected income per month.
```
{
  "category": "Regular Salary",
  "amount": 2000.00,
  "type": "monthlyIncome"
},
{
  "category": "Groceries",
  "amount": 300.00,
  "type": "monthlyExpense"
}
```

## BudgetAnalysis
A digest of a single month. The back end will

| name               | description                                                                                                           |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
| month              | integer of the current month being analyzed                                                                           |
| totalIncome        | sum total of all income (transactions allocated to a budget category of type *Income                                  |
| totalExpense       | sum total of all expenses (transactions allocated to a budget category of type *Expense                               |
| totalUncategorized | sum total of all uncategorized transactions                                                                           |
| budgetOutcomes []  | difference between budgetCategory amounts (the amounted budgeted) and the sum of all transactions categorized as such |

### Structure Example:
In the case below, the sum total of all transactions allocated as "Regular Salary" equaled the Budget Category amount.
The sum total of transactions categorized as "Groceries" for the month was 123.45 LESS that the budgeted amount. 
```
{
    "month": 1,
    "totalIncome": 2000.00,
    "totalExpense": 1500.00,
    "totalUncategorized": 123.45,
    "budgetOutcomes" : [
        {
            "category": "Regular Salary",
            "outcome": 0
        },
        {
            "category": "Groceries",
            "outcome": "-123.45"
        }
    ]
}
```
