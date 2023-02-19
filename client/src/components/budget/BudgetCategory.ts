enum BudgetType{
    monthlyIncome,
    monthlyExpense
}

export class BudgetCategory_t {

    category: string;
    amount: number;
    type: BudgetType;


    constructor(category: string, amount: number, type: BudgetType) {
        this.category = category;
        this.amount = amount;
        this.type = type;
    }
}