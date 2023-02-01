import {getFromBackend} from "../utils/api";
import {useEffect, useState} from "react";

export default function BudgetCategory(props){
    const defaultMockBudget = {
            "name" : "waiting for API",
            "budgetedAmount": "waiting for API",
            "budgetSpent": "waiting for API"
        }
    const [mockBudget, setMockBudget] = useState(defaultMockBudget);

    useEffect(() => {
        getFromBackend().then((data) => {
        setMockBudget(data)});
    }, [])


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