export class BudgetOutcome{
    category: string;
    outcome: number;


    constructor(category: string, outcome: number) {
        this.category = category;
        this.outcome = outcome;
    }
}