export default function BudgetCategory(props){
    const mockBudget = {
        "name" : "Food",
        "budgetedAmount" : 200.0,
        "budgetSpent" : 125.83
    }

    return(
        <div
            className="BudgetCategory"
            data-testid={"BudgetCategory" + "-" + props.key}>
            <h2>
                name: {mockBudget.name}<br/>
                amount: {mockBudget.budgetedAmount}<br/>
                spent: {mockBudget.budgetSpent}<br/>
            </h2>
        </div>
    )
}