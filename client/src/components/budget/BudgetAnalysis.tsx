import {BudgetOutcome_t} from "./BudgetOutcome";
import {Budget_t} from "./Budget";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Page,
    PageContent,
    Paragraph, Table, TableBody,
    TableCell,
    TableHeader, TableRow
} from "grommet";

export class BudgetAnalysis_t{
    month: number;
    totalIncome: number;
    totalExpense: number
    totalUncategorized: number;
    budgetOutcomes: Array<BudgetOutcome_t>;


    constructor(month: number, totalIncome: number, totalExpense: number, totalUncategorized: number, budgetOutcomes: Array<BudgetOutcome_t>) {
        this.month = month;
        this.totalIncome = totalIncome;
        this.totalExpense = totalExpense;
        this.totalUncategorized = totalUncategorized;
        this.budgetOutcomes = budgetOutcomes;
    }
}

export default function BudgetAnalysis(props: {analysis: BudgetAnalysis_t}){

    const budgetCategory = (outcome: BudgetOutcome_t) =>{

        return(
            <TableRow>
                <TableCell>{outcome.category}</TableCell>
                <TableCell>$ {outcome.outcome}</TableCell>
            </TableRow>
        )
    }

    const mapCategories = (outcomes: Array<BudgetOutcome_t>) =>{
        return(
           <TableBody>
               {outcomes.map((outcome) => budgetCategory(outcome))}
           </TableBody>
        )
    }
    const budgetOutcomes = () => {

        return(
            <>
                Month: {props.analysis.month}<br/>
                Total Income: ${props.analysis.totalIncome}<br/>
                Total Spent: ${props.analysis.totalExpense}<br/>
                Total Uncategorized: ${props.analysis.totalUncategorized}<br/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell scope={"col"} border={"bottom"}>
                                Category
                            </TableCell>
                            <TableCell scope={"col"} border={"bottom"}>
                                Outcome
                            </TableCell>
                        </TableRow>
                    </TableHeader>
                    {mapCategories(props.analysis.budgetOutcomes)}
                </Table>

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