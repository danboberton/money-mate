import {BudgetCategory_t} from "./BudgetCategory";

export class Budget_t{
    budgetID: string;
    budgetName: string;
    budgetCategories: Array<BudgetCategory_t>;
    budgetStartDat: number;


    constructor(budgetID: string, budgetName: string, budgetCategories: Array<BudgetCategory_t>, budgetStartDat: number) {
        this.budgetID = budgetID;
        this.budgetName = budgetName;
        this.budgetCategories = budgetCategories;
        this.budgetStartDat = budgetStartDat;
    }
}