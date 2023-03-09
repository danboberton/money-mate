export class Transaction_t {
    public txID: string;
    public cost: number;
    public date: string;
    public description: string;
    public budgetClassifications: string;
    public month: number;

    constructor(txID: string, cost: number, date: string, description: string, budgetClassifications: string, month: number) {
        this.txID = txID;
        this.cost = cost;
        this.date = date;
        this.description = description;
        this.budgetClassifications = budgetClassifications;
        this.month = month;
    }
}