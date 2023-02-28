import {BudgetOutcome} from "./BudgetOutcome";
import {Budget_t} from "./Budget";
import {Button, Card, CardBody, CardFooter, CardHeader, Page, PageContent, Paragraph} from "grommet";

export class BudgetAnalysis_t{
    month: number;
    totalIncome: number;
    totalExpense: number
    totalUncategorized: number;
    budgetOutcomes: Array<BudgetOutcome>;


    constructor(month: number, totalIncome: number, totalExpense: number, totalUncategorized: number, budgetOutcomes: Array<BudgetOutcome>) {
        this.month = month;
        this.totalIncome = totalIncome;
        this.totalExpense = totalExpense;
        this.totalUncategorized = totalUncategorized;
        this.budgetOutcomes = budgetOutcomes;
    }
}

export default function BudgetAnalysis(props: {analysis: BudgetAnalysis_t}){

    const budgetOutcomes = () => {

        return(
            <>
                <p>{JSON.stringify(props.analysis)}</p>
                Month: {props.analysis.month}<br/>
                Total Income: {props.analysis.totalIncome}<br/>
                Total Income: {props.analysis.totalExpense}<br/>
                Total Uncategorized: {props.analysis.totalUncategorized}<br/>
            </>
        )
    }
    return(
        <Card  height="large" width="large" background="light-1">
            <CardHeader pad="medium"></CardHeader>
            <CardBody pad="medium">{budgetOutcomes()}</CardBody>
        </Card>
        )
}