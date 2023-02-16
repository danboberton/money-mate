import {Transaction} from "./Transaction";
import {Budget} from "./Budget";
import {BudgetAnalysis} from "./BudgetAnalysis";

export class GetMonthResponse{
    transactions: Transaction;
    budget: Budget;
    budgetAnalysis: BudgetAnalysis;


    constructor(transactions: Transaction, budget: Budget, budgetAnalysis: BudgetAnalysis) {
        this.transactions = transactions;
        this.budget = budget;
        this.budgetAnalysis = budgetAnalysis;
    }
}