// // import {Transaction_t} from "./Transaction";
// // import {
// //     Button,
// //     Card,
// //     CardBody,
// //     Heading,
// //     CardFooter,
// //     CardHeader,
// //     Page,
// //     PageContent,
// //     Paragraph, Table, TableBody,
// //     TableCell,
// //     TableHeader, TableRow
// // } from "grommet";

// // export class Transactions_t {
// //     public transactions: Array<Transaction_t>;

// //     constructor(transactions: Array<Transaction_t>) {
// //         this.transactions = transactions;
// //     }
// // }

// // export default function TransactionTable(props: {transactionData: Array<Transaction_t>, filterCategory: string}){
// //     let count = 0
    
// //     const transactionOutput = (transact: Transaction_t) => {
// //         count++
// //         const [date, time] = transact.date.split(' ');
// //         const formattedDate = new Date(date).toLocaleDateString();
// //         const formattedTime = new Date(`${date}T${time}`).toLocaleTimeString([], {hour12: true, hour: 'numeric', minute: '2-digit'});
// //         return (
// //             <TableRow key={count}>
// //                 <TableCell>{formattedDate}</TableCell>
// //                 <TableCell>{formattedTime}</TableCell>
// //                 <TableCell>{transact.cost}</TableCell>
// //                 <TableCell>{transact.budgetClassifications}</TableCell>
// //             </TableRow>
// //         )
// //     }
// //     const listTransactions = (transacts: Array<Transaction_t>, filterCategory: string) =>{

// //         if (filterCategory !== ''){
// //             const filteredTransacts = transacts.filter(transact => {
// //                 if (transact.budgetClassifications != null){
// //                     return transact.budgetClassifications.toLowerCase().includes(filterCategory.toLowerCase())
// //                 }
// //                 return false; 
// //             }
// //             );

// //             return(
// //                 <TableBody>
// //                     {filteredTransacts.map((transact) => transactionOutput(transact))}
// //                 </TableBody>
// //             )
// //         }

// //         return(
// //             <TableBody>
// //                 {transacts.map((transact) => transactionOutput(transact))}
// //             </TableBody>
// //         )
// //     }  
    
// //     const transactionsTable = () => {
// //         return (
// //             <Table>
// //                 <TableHeader>
// //                     <TableRow>
// //                         <TableCell scope={"col"} border={"bottom"}>
// //                             Date
// //                         </TableCell>
// //                         <TableCell scope={"col"} border={"bottom"}>
// //                             Time
// //                         </TableCell>
// //                         <TableCell scope={"col"} border={"bottom"}>
// //                             Amount
// //                         </TableCell>
// //                         <TableCell scope={"col"} border={"bottom"}>
// //                             Category
// //                         </TableCell>
// //                     </TableRow>
// //                 </TableHeader>
                
// //                 {listTransactions(props.transactionData, props.filterCategory)}
// //             </Table>  
// //         )
// //     }

// //     return (
// //         <>
// //             <Page kind="full">
// //                 <PageContent background="light-3">
// //                     <h2>Transactions</h2>
// //                 </PageContent>
// //             </Page>
// //             <Card  min-height="large" width="large" background="light-1">
// //                 <CardBody overflow="auto" min-height="300px" pad="medium">{transactionsTable()}</CardBody>
// //             </Card>
// //         </>   
// //     )
// // }

// import { Button, Card, CardBody, Heading, CardFooter, CardHeader, Page, PageContent, Paragraph, Table, TableBody, TableCell, TableHeader, TableRow, TextInput } from 'grommet';
// import { useState } from 'react';

// export type Transaction_t = {
//   id: number; // add an `id` property
//   date: string;
//   cost: number;
//   budgetClassifications: string | null;
// }

// export type Transactions_t = {
//   transactions: Array<Transaction_t>;
// }

// function TransactionTable(props: { transactionData: Array<Transaction_t>, filterCategory: string }) {
//   let count = 0;

//   const [sort, setSort] = useState<{ property: string, direction: string }>({ property: 'date', direction: 'desc' });

//   const transactionOutput = (transact: Transaction_t) => {
//     count++;
//     const [date, time] = transact.date.split(' ');
//     const formattedDate = new Date(date).toLocaleDateString();
//     const formattedTime = new Date(`${date}T${time}`).toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: '2-digit' });
//     return (
//       <TableRow key={transact.id}> {/* use the `id` property as the key */}
//         <TableCell>{formattedDate}</TableCell>
//         <TableCell>{formattedTime}</TableCell>
//         <TableCell>{transact.cost}</TableCell>
//         <TableCell>{transact.budgetClassifications}</TableCell>
//       </TableRow>
//     );
//   };

//   const listTransactions = (transacts: Array<Transaction_t>, filterCategory: string) => {

//     if (filterCategory !== '') {
//       const filteredTransacts = transacts.filter(transact => {
//         if (transact.budgetClassifications != null) {
//           return transact.budgetClassifications.toLowerCase().includes(filterCategory.toLowerCase());
//         }
//         return false;
//       });

//       return (
//         <TableBody>
//           {filteredTransacts.map((transact) => transactionOutput(transact))}
//         </TableBody>
//       );
//     }

//     return (
//       <TableBody>
//         {transacts.map((transact) => transactionOutput(transact))}
//       </TableBody>
//     );
//   }

//   const transactionsTable = () => {
//     return (
//       <Table
//         data={props.transactionData} // add the `data` property
//         columns={[
//           { header: 'Date', property: 'date' },
//           { header: 'Time', property: 'time' },
//           { header: 'Amount', property: 'cost' },
//           { header: 'Category', property: 'budgetClassifications' },
//         ]}
//         sort={sort}
//         onSort={(nextSort) => setSort(nextSort)}
//       >
//         <TableHeader />
//         {listTransactions(props.transactionData, props.filterCategory)}
//       </Table>
//     );
//   }

//   return (
//     <>
//       <Page kind="full">
//         <PageContent background="light-3">
//           <h2>Transactions</h2>
//         </PageContent>
//       </Page>
//       <Card min-height="large" width="large" background="light-1">
//         <CardBody overflow="auto" min-height="300px" pad="medium">{transactionsTable()}</CardBody>
//       </Card>
//     </>
//   );
// }

// export default TransactionTable;
