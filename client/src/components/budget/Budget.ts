import {BudgetCategory} from "./BudgetCategory";

export class Budget{
    budgetID: string;
    budgetName: string;
    budgetCategories: Array<BudgetCategory>;
    budgetStartDat: number;


    constructor(budgetID: string, budgetName: string, budgetCategories: Array<BudgetCategory>, budgetStartDat: number) {
        this.budgetID = budgetID;
        this.budgetName = budgetName;
        this.budgetCategories = budgetCategories;
        this.budgetStartDat = budgetStartDat;
    }
}