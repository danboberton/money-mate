import json
from src.budget.database import Database
from src.budget.getBudgetAnalysis import get_budget_analysis


def get_month(input: dict, mock=False):
    result = {}
    if mock:
        transaction_file = open("../budget/mockData/mockTransaction.json", "r")
        budget_file = open("../budget/mockData/mockBudget.json", "r")

        transactions = json.loads(transaction_file.read())
        budget = json.loads(budget_file.read())
    else:
        db = Database("127.0.0.1", 27017)
        # TODO: get data structures from database instead of mock files

    result["transactions"] = transactions
    result["budget"] = budget
    budget_analysis = get_budget_analysis(transactions, budget, input['month'])
    result["budgetAnalysis"] = budget_analysis

    return result
