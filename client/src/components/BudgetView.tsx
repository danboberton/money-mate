import {useEffect, useState} from "react";
import BudgetSettings from "./budget/BudgetSettings";
import BudgetAnalysis from "./budget/BudgetAnalysis";
import TransactionTable from "./budget/TransactionTable";
import {GetMonthRequest_t, GetMonthResponse_t} from "./budget/GetMonthResponse";
import {fetchPOST} from "../api/request";

export default function BudgetView(){
    const [monthData, setMonthData] = useState(null)

    // @ts-ignore
    const monthRequest: RequestInit = {
        method: 'POST',
        mode: 'cors',
        body: {
            request: "getMonth",
            month: 1,
            year: 2023
        },
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        }
    }

    useEffect(()=>{
        fetchPOST<GetMonthResponse_t>('127.0.0.1:5000', monthRequest)
            .then( (data) => setMonthData(data))
    }, [])

    return(
        <div>
            <h1>Budget View</h1>
            <p>This is a dump of the getMonth API call, this data should get broken up and sent to the 3 components below</p>
            <p>The data doesn't come from the database itself (yet), but is loaded from server/src/budget/mockData</p>
            <p>{JSON.stringify(monthData)}</p>
            <BudgetSettings/>
            <BudgetAnalysis/>
            <TransactionTable/>
        </div>
    )
}