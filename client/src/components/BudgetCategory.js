import {getFromBackend} from "../utils/api";

export default function BudgetCategory(props){
    const mockBudget = getFromBackend()

    return(
        <div
            className="BudgetCategory"
            data-testid={"BudgetCategory" + "-" + props.key}>
            <h1>This data below came from the backend api</h1>
            <h2>
                name: {mockBudget.name}<br/>
                amount: {mockBudget.budgetedAmount}<br/>
                spent: {mockBudget.budgetSpent}<br/>
            </h2>
        </div>
    )
}