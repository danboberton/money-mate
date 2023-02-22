import {useEffect, useState} from "react";
import BudgetAnalysis from "./budget/BudgetAnalysis";
import TransactionTable from "./budget/TransactionTable";
import {GetMonthResponse_t} from "./budget/GetMonthResponse";
import {fetchPOST} from "../api/request";
import UserBudget from "./budget/UserBudget";

export default function BudgetView(){
    const [monthData, setMonthData] = useState<GetMonthResponse_t | undefined>(undefined)

    const body = { request: "getMonth", month: 1, year: 2023}
    const monthRequest: RequestInit = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }


    useEffect(()=>{
        fetchPOST<GetMonthResponse_t>('http://127.0.0.1:5000/api/getMonth', monthRequest)
            .then( (data) => setMonthData(data))
    }, [])

    return(
        <div>
            <h1>Budget View</h1>
            <p>This is a dump of the getMonth API call, this data should get broken up and sent to the 3 components below</p>
            <p>The data doesn't come from the database itself (yet), but is loaded from server/src/budget/mockData</p>
            <UserBudget budget={monthData?.budget}/>
            <BudgetAnalysis/>
            <TransactionTable/>
        </div>
    )
}