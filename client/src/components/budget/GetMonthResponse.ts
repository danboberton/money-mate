import {Transaction_t} from "./Transaction";
import {Budget_t} from "./Budget";
import {BudgetAnalysis_t} from "./BudgetAnalysis";

export class GetMonthResponse_t {
    transactions: Transaction_t;
    budget: Budget_t;
    budgetAnalysis: BudgetAnalysis_t;


    constructor(transactions: Transaction_t, budget: Budget_t, budgetAnalysis: BudgetAnalysis_t) {
        this.transactions = transactions;
        this.budget = budget;
        this.budgetAnalysis = budgetAnalysis;
    }
}
