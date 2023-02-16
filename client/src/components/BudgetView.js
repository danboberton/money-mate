import {getFromBackend, getMonth} from "../utils/api";
import {useEffect, useState} from "react";
import BudgetSettings from "./budget/BudgetSettings";
import BudgetAnalysis from "./budget/BudgetAnalysis";
import TransactionTable from "./budget/TransactionTable";

export default function BudgetView(props){
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(2023)

    const [monthData, setMonthData] = useState(null);

    const defaultMockBudget = {
            "name" : "waiting for API",
            "budgetedAmount": "waiting for API",
            "budgetSpent": "waiting for API"
        }

    const [mockBudget, setMockBudget] = useState(defaultMockBudget);
    const monthRequest = {
        request: "getMonth",
        month: month,
        year: year
    }


    // The code in this useEffect runs only once, when this component is first rendered
    useEffect(() => {
        getFromBackend().then((data) => {
        setMockBudget(data)
        });

        getMonth(monthRequest).then((data) => {
            setMonthData(data);
        });
    }, [])


    return(
        <div>
        <div
            className="BudgetCategory"
            data-testid={"BudgetView" + "-" + props.key}>
            <h1>Testing API calls</h1>
            <p>
                name: {mockBudget.name}<br/>
                amount: {mockBudget.budgetedAmount}<br/>
                spent: {mockBudget.budgetSpent}<br/>
            </p>
        </div>
        <div>
            <h1>Budget View</h1>
            <p>month: {month} year: {year}</p>
            <p>This is a dump of the getMonth API call, this data should get broken up and sent to the 3 components below</p>
            <p>The data doesn't come from the database itself (yet), but is loaded from server/src/budget/mockData</p>
            <p>{JSON.stringify(monthData)}</p>
            <BudgetSettings/>
            <BudgetAnalysis/>
            <TransactionTable/>
        </div>
        </div>
    )
}