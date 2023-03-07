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
    console.log(props.transactionData[0])
    const transactionOutput = (transact: Transaction_t) => {
        return (
            <TableRow>
                <TableCell>{transact.date}</TableCell>
                <TableCell>{transact.cost}</TableCell>
                <TableCell>{transact.description}</TableCell>
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
                            Amount
                        </TableCell>
                        <TableCell scope={"col"} border={"bottom"}>
                            Description
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
            <Card  height="large" width="large" background="light-1">
                <CardHeader pad="medium"></CardHeader>
                <CardBody pad="medium">{transactionsTable()}</CardBody>
            </Card>
        </>   
    )
}