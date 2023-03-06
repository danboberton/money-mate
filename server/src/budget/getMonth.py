import json
import subprocess
from budget.database import Database
from budget.getBudgetAnalysis import get_budget_analysis

def test_method_called_from_route(self):
        m = mock.MagicMock()
        m.values = "MyData"
        with mock.patch("somefile.request", m):
            somefile.method_called_from_route()
def get_month(request: dict, mock=False):
    result = {}
    if mock:
        cmd = subprocess.run(["git", "rev-parse", "--show-toplevel"], capture_output=True)
        repo_root = cmd.stdout.decode("utf-8").strip()
        transaction_file = open(repo_root + "/server/src/budget/mockData/mockTransaction.json", "r")
        budget_file = open(repo_root + "/server/src/budget/mockData/mockBudget.json", "r")

        transactions = json.loads(transaction_file.read())
        budget = json.loads(budget_file.read())
    else:
        db = Database("127.0.0.1", 27017)
        # TODO: get data structures from database instead of mock files

    result["transactions"] = transactions
    result["budget"] = budget
    budget_analysis = get_budget_analysis(transactions, budget, 1)
    result["budgetAnalysis"] = budget_analysis

    return result
