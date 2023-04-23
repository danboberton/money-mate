import {useEffect, useState} from "react";
import BudgetInfo from "./budget/BudgetInfo";
import BudgetAnalysis from "./budget/BudgetAnalysis";
import TransactionTable from "./budget/TransactionTable";
import {GetMonthResponse_t} from "./budget/GetMonthResponse";
import {fetchPOST} from "../api/request";
import {Page,Box, PageContent, Paragraph, Card, CardHeader, Heading, PageHeader, Header} from "grommet";
import {Money} from "grommet-icons";

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

    const data = () => {
        if(monthData){
            return(
                <>
                    <BudgetInfo budget={monthData.budget}/>
                    <BudgetAnalysis analysis={monthData.budgetAnalysis} budget={monthData.budget}/>
                    <TransactionTable monthData={monthData} setMonthData={setMonthData}/>
                </>
            )
        } else {
            return null
        }
    }

    return(
        <Page justify="center" align="center" width="40%" background="light-1">
            <Header>
                <Box direction="row" align="center" gap="small">
                    <Money color="black" size="large"></Money>
                    <Box>
                    <Heading>Budget View</Heading>
                    </Box>
                </Box>
            </Header>
    {data()}
  </Page>
    )
}