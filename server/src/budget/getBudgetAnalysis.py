def get_budget_analysis(tx: dict, budget: dict, month: int):
    result = {}

    total_income = 0
    total_expense = 0
    total_uncategorized = 0

    budget_outcomes = []

    # TODO: this is an inefficient way to do this... to iterate through all tx once every category.
    # Should probably iterate through every tx once and apply to categories
    for category in budget["budgetCategories"]:
        category_total = 0
        category_outcome = dict()
        category_outcome["category"] = category["category"]

        for curtx in tx:
            if curtx["budgetClassifications"] is None:
                total_uncategorized += curtx["cost"]
            elif category["category"] in curtx["budgetClassifications"]:
                category_total += curtx["cost"]
                if category["type"] == "monthlyExpense": total_expense += curtx["cost"]
                if category["type"] == "monthlyIncome": total_income += curtx["cost"]
            else:
                total_uncategorized += curtx["cost"]

        category_outcome["outcome"] = category_total
        budget_outcomes.append(category_outcome)

    result["totalIncome"] = total_income
    result["totalExpense"] = total_expense
    result["totalUncategorized"] = total_uncategorized
    result["budgetOutcomes"] = budget_outcomes
    result["month"] = month

    return result
