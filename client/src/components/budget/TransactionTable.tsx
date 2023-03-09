import {Transaction_t} from "./Transaction";
import {
    Button,
    Card,
    CardBody,
    Heading,
    CardFooter,
    CardHeader,
    Page,
    PageContent,
    Paragraph, Table, TableBody,
    TableCell,
    TableHeader, TableRow
} from "grommet";

export class Transactions_t {
    public transactions: Array<Transaction_t>;

    constructor(transactions: Array<Transaction_t>) {
        this.transactions = transactions;
    }
}

export default function TransactionTable(props: {transactionData: Array<Transaction_t>}){
    let count = 0
    
    const transactionOutput = (transact: Transaction_t) => {
        count++
        const [date, time] = transact.date.split(' ');
        const formattedDate = new Date(date).toLocaleDateString();
        const formattedTime = new Date(`${date}T${time}`).toLocaleTimeString([], {hour12: true, hour: 'numeric', minute: '2-digit'});
        return (
            <TableRow>
                <TableCell>{formattedDate}</TableCell>
                <TableCell>{formattedTime}</TableCell>
                <TableCell>{transact.cost}</TableCell>
                <TableCell>{transact.budgetClassifications}</TableCell>
            </TableRow>
        )
    }
    const listTransactions = (transacts: Array<Transaction_t>) =>{

        return(
            <TableBody>
                {transacts.map((transact) => transactionOutput(transact))}
            </TableBody>
        )
    }  
    
    const transactionsTable = () => {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell scope={"col"} border={"bottom"}>
                            Date
                        </TableCell>
                        <TableCell scope={"col"} border={"bottom"}>
                            Time
                        </TableCell>
                        <TableCell scope={"col"} border={"bottom"}>
                            Amount
                        </TableCell>
                        <TableCell scope={"col"} border={"bottom"}>
                            Category
                        </TableCell>
                    </TableRow>
                </TableHeader>
                {listTransactions(props.transactionData)}
            </Table>  
        )
    }

    return (
        <>
            <Page kind="full">
                <PageContent background="light-3">
                    <h2>Transactions</h2>
                </PageContent>
            </Page>
            <Card  min-height="large" width="large" background="light-1">
                <CardBody overflow="auto" min-height="300px" pad="medium">{transactionsTable()}</CardBody>
            </Card>
        </>   
    )
}