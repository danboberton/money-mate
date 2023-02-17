export class Transaction_t {
    public txID: string;
    public cost: number;
    public date: Date;
    public description: string;
    public budgetClassification: string;
    public month: number;

    constructor(txID: string, cost: number, date: Date, description: string, budgetClassification: string, month: number) {
        this.txID = txID;
        this.cost = cost;
        this.date = date;
        this.description = description;
        this.budgetClassification = budgetClassification;
        this.month = month;
    }
}

export default function Transaction(){

    return null
}