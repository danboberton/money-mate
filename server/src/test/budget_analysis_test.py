import pytest
from budget.getBudgetAnalysis import get_budget_analysis
from budget.getMonth import get_month


@pytest.fixture
def get_month_fixture():
    return get_month({}, mock=True)


def test_budget_analysis(get_month_fixture):
    month = get_month
    transactions = month['transactions']
    assert len(transactions) > 0
    assert month['budget'] is not None
    assert month['budgetAnalysis'] is not None
