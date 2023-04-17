import {useEffect, useState} from "react";
import BudgetInfo from "./budget/BudgetInfo";
import BudgetAnalysis from "./budget/BudgetAnalysis";
import TransactionTable from "./budget/TransactionTable";
import {GetMonthResponse_t} from "./budget/GetMonthResponse";
import {fetchPOST} from "../api/request";

export default function BudgetView(){
    const [monthData, setMonthData] = useState<GetMonthResponse_t | undefined>(undefined)
    const [filterCategory, setFilterCategory] = useState('')

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

    const data = () => {
        if(monthData){
            return(
                <>
                    <BudgetInfo budget={monthData.budget}/>
                    <BudgetAnalysis analysis={monthData.budgetAnalysis} budget={monthData.budget} setFilterCategory={setFilterCategory}/>
                    <TransactionTable transactionData={monthData.transactions}/>
                </>
            )
        } else {
            return null
        }
    }

    return(
        <>
        <h1>Budget View</h1>
        { data() }
        </>
    )
}