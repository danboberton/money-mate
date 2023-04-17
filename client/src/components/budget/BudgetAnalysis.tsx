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
import CategoryOutcome from "./CategoryOutcome";
import {BudgetCategory_t} from "./BudgetCategory";
import { StringMappingType } from "typescript";

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

export default function BudgetAnalysis(props: {analysis: BudgetAnalysis_t, budget: Budget_t}){
    
    const budgetCategory = (outcome: BudgetOutcome_t, capacity: number, key: number) =>{

        return(
            <TableRow key={key}>
                <TableCell>{outcome.category}</TableCell>
                <TableCell><CategoryOutcome outcome={outcome.outcome} capacity={capacity}/></TableCell>
            </TableRow>
        )
    }

    // TODO: This is CRAZY inefficient, maybe the data structures should be redesigned/this logic moved to the back end
    const getCapacityByBudgetName = (name: string, budget: Budget_t) => {
        for (let category of budget.budgetCategories){
            if (category.category === name){
                return category.amount
            }
        }

        console.log("ERROR: Couldn't find " + name + " in Budget_t.budgetCategories")
        return 0
    }

    const combineBudgetCapacityAndOutcome = (outcomes: Array<BudgetOutcome_t>, budget: Budget_t) =>{
        let keyCount = 0;

        return(
            <>
                {outcomes.map((outcome) => {
                    let capacity: number = getCapacityByBudgetName(outcome.category, budget)
                    return(budgetCategory(outcome, capacity, keyCount++))
            })}
            </>
        )
    }

    const mapCategories = (outcomes: Array<BudgetOutcome_t>, budget: Budget_t) =>{
        return(
           <TableBody>
               {combineBudgetCapacityAndOutcome(outcomes, budget)}
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
                    {mapCategories(props.analysis.budgetOutcomes, props.budget)}
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