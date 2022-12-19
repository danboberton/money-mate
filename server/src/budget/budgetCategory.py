class BudgetCategory:

    def __init__(self, name: str):
        self.name = name
        self.data = None
        self.monthlyBudget = None

    def populateMonth(self, month: str):
        pass

    def remaining(self):
        pass

    def setMonthlyBudget(self, amount: float):
        self.monthlyBudget = amount


