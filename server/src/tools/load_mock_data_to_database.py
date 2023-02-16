import subprocess
import json
from budget.database import Database

# This script loads a file containing JSON objects in to the database
# Because our database is transient, we might need to load in some mock data
# to work with during development

MOCK_TRANSACTIONS = "/server/src/tools/mockData/mockTransaction.json"
MOCK_BUDGET = "/server/src/tools/mockData/mockBudget.json"


def loadJSON(file_path):
    file = open(file_path, "r")
    contents = file.read()
    return json.loads(contents)


cmd = subprocess.run(["git", "rev-parse", "--show-toplevel"], capture_output=True)
repo_root = cmd.stdout.decode("utf-8").strip()

tx = loadJSON(repo_root + MOCK_TRANSACTIONS)
# budget = loadJSON(repo_root + MOCK_BUDGET)

db = Database("127.0.0.1", 27017)
insertResult = db.insert("mock_data", "transactions", tx)
result = db.query("mock_data", "transactions", {})
print(result)
