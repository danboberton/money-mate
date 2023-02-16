# API
Definitions and descriptions of API calls

## getMonth
Endpoint: `api/getMonth`

Method: POST

Request Object:
```
{
    "request": "getMonth"
    "month": 1,
    "year": 2023
}
```

Return Object:
```
{
    "transactions": [
        /* array of Transaction from data.md */
    ],
    "budget": {
        /* Budget from data.md */
    },
    "budgetAnalysis": {
        /* BudgetAnalysis from data.md */
    }
}

```