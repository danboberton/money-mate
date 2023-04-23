import { useState } from "react";
import { Box, Select, DateInput, TextInput, DataTable, CardFooter, CardHeader, Heading, Page, Layer, Header, Form, FormField, PageContent, Card, CardBody, Button } from "grommet";
import { Filter } from "grommet-icons";
import { Transaction_t } from "./Transaction";
import { GetMonthResponse_t } from "./GetMonthResponse";
import { BudgetAnalysis_t} from "./BudgetAnalysis";

const TransactionTable = ({ monthData, setMonthData }: { monthData: GetMonthResponse_t, setMonthData: any}) => {
    const [transactionData, setTransactionData] = useState<Transaction_t[]>(monthData.transactions);

    const [showModal, setShowModal] = useState(false);
    const [sortP, setSortP] = useState<{ property: string; direction: "asc" | "desc" }>({
        property: "date",
        direction: "asc",
    });

    const [filters, setFilters] = useState<{ startDate: string; endDate: string; minAmount: string; maxAmount: string; budgetClassification: string }>({
        startDate: "",
        endDate: "",
        minAmount: "",
        maxAmount: "",
        budgetClassification: "",
    });

    const filteredTransactions = transactionData.filter((transaction) => {
        if (filters.startDate) {
            const transactionDate = new Date(transaction.date);
            if (transactionDate < new Date(filters.startDate)) {
                return false;
            }
        }
        if (filters.endDate) {
            const transactionDate = new Date(transaction.date);
            if (transactionDate > new Date(filters.endDate)) {
                return false;
            }
        }
        if (filters.minAmount) {
            if (transaction.cost < parseFloat(filters.minAmount)) {
                return false;
            }
        }
        if (filters.maxAmount) {
            if (transaction.cost > parseFloat(filters.maxAmount)) {
                return false;
            }
        }
        let notEqual: boolean = filters.budgetClassification !== transaction.budgetClassifications;
        if (filters.budgetClassification && !transaction.budgetClassification && notEqual) {
            return false;
        }
        return true;
    });

    const sortTransactions = filteredTransactions.sort((a, b) => {
        const sortPropertyA = a[sortP.property];
        const sortPropertyB = b[sortP.property];

        if (sortPropertyA < sortPropertyB) {
            return sortP.direction === "asc" ? -1 : 1;
        }
        if (sortPropertyA > sortPropertyB) {
            return sortP.direction === "asc" ? 1 : -1;
        }
        return 0;
    });
    const [transactionsOut, setTransactionsOut] = useState<Transaction_t[]>(sortTransactions);

    const handleFilterChange = (fieldName: string, fieldValue: string) => {
        setFilters({ ...filters, [fieldName]: fieldValue });
    };

    function handleFilterSubmit() {
        setTransactionsOut(sortTransactions);
        setShowModal(false);
    };

    function handleClickOutside() {
        setTransactionsOut(sortTransactions);
        setShowModal(false);
    }

    return (
        <>
            <Card justify="center" align="center" width="70%" background="light-2" margin={{left: "auto", right: "auto", top: "2%", bottom: "2%"}}>
                <CardHeader align="center" justify="center">
                    <Heading level={2}>Transactions</Heading>
                </CardHeader>
                <CardBody round="small" background="light-4" pad="large">
                    <Box margin="small">
                        <Box margin="small" height="300px" overflow="auto">
                            <DataTable pad={{horizontal: "large", vertical: "small"}}
                                pin
                                columns={[
                                { property: "date", header: "Date", sortable: true },
                                { property: "cost", header: "Amount", sortable: true },
                                { property: "budgetClassifications", header: "Category", sortable: true },
                                {
                                    property: 'edit',
                                    header: (
                                        <Filter onClick={() => setShowModal(true)}/>
                                      ),
                                    sortable: false
                                  }
                                ]}
                                data={transactionsOut}
                                sortable
                            />
                        </Box>
                            {showModal && (
                            <Layer onEsc={() => setShowModal(false)} onClickOutside={() => handleClickOutside()}>
                                <Box pad="medium">
                                    <Form onSubmit={handleFilterSubmit}>
                                        <FormField label="Start Date">
                                            <input type="date" name="startDate" value={filters.startDate} onChange={(e) => handleFilterChange("startDate", e.target.value)} />
                                        </FormField>
                                        <FormField label="End Date">
                                            <input type="date" name="endDate" value={filters.endDate} onChange={(e) => handleFilterChange("endDate", e.target.value)} />
                                        </FormField>
                                        <FormField label="Minimum Amount">
                                            <input type="number" name="minAmount" value={filters.minAmount} onChange={(e) => handleFilterChange("minAmount", e.target.value)} />
                                        </FormField>
                                        <FormField label="Maximum Amount">
                                            <input type="number" name="maxAmount" value={filters.maxAmount} onChange={(e) => handleFilterChange("maxAmount", e.target.value)} />
                                        </FormField>
                                        <FormField label="Category">
                                            <select name="budgetClassification" value={filters.budgetClassification} onChange={(e) => handleFilterChange("budgetClassification", e.target.value)}>
                                                <option value=""></option>
                                                <option value="Utilities">Utilities</option>
                                                <option value="Auto">Auto</option>
                                                <option value="Rent">Rent</option>
                                                <option value="Entertainment">Entertainment</option>
                                                <option value="Groceries">Groceries</option>
                                                <option value="Regular Salary">Regular Salary</option>
                                            </select>
                                        </FormField>
                                        <Box direction="row" justify="end" margin={{ top: "medium" }}>
                                            <Button label="Clear Filters" onClick={() => setFilters({ startDate: "", endDate: "", minAmount: "", maxAmount: "", budgetClassification: "" })} />
                                            <Button type="submit" label="Apply Filters" />
                                        </Box>
                                    </Form>
                                </Box>
                            </Layer>
                        )}
                        </Box>
                    </CardBody>
                    <CardFooter align="center" justify="center" pad="medium">
                       <AddNewTransaction 
                           transactionsOut={transactionsOut} 
                           setTransactionsOut={setTransactionsOut}
                           monthData={monthData}
                           setMonthData={setMonthData}
                        />
                    </CardFooter>
                 </Card>
            </> 
    );
};

const AddNewTransaction = ({transactionsOut, setTransactionsOut, monthData, setMonthData} : {transactionsOut: Transaction_t[], setTransactionsOut: any, monthData: GetMonthResponse_t, setMonthData: any}) => {
    const [addNew, setAddNew] = useState<boolean>(false);
    const [date, setDate] = useState<string>(new Date().toISOString());
    const [amount, setAmount] = useState<string>("$0.00");
    const [category, setCategory] = useState<string>("");
    const [valid, setValid] = useState<boolean>(false);
    const categories: string[] = ['Rent', 'Utilities', 'Auto', 'Entertainment', 'Groceries', 'Regular Salary'];

    const tryToParseFloat = (value: string) => {
        const newValue = parseFloat(value.substring(1));
        if(value.length == 1){
            setAmount("$")
        }
        if(!isNaN(newValue) && value.split(".").length < 3 && (!isNaN(parseFloat(value.substring(value.length-1))) || value[value.length-1] === '.')){
            if((value.split(".").length == 2 && value.split(".")[1].length > 2)){
                setValid(isValidTransaction(value, category));
                return;
            }
            setAmount(value);
        }
        setValid(isValidTransaction(value, category));
    };

    const onChange = (event: any) => {
        const nextValue = event.value;
        setDate(nextValue);
        setValid(isValidTransaction(amount, category));
    };

    const reset = () => {
        setDate(new Date().toISOString());
        setAmount("$0.00");
        setCategory("");
        setValid(false);
        setAddNew(false);
    };

    const setNewCategory = (category:string) => {
        setCategory(category);
        setValid(isValidTransaction(amount, category));
    }


    const isValidTransaction = (curAmount: string, curCategory: string) => {
        if(!categories.includes(curCategory))
            return false;
        if(curAmount.length < 2)
            return false;
        if(parseFloat(curAmount.substring(1)) <= 0)
            return false;
        return true;
    };

    const addNewTransaction = () => {
        const newTransaction = new Transaction_t("id", parseFloat(amount.substring(1)), date, "description", category, 1);
        let newTransactions = [...transactionsOut];
        newTransactions.push(newTransaction);
        setTransactionsOut(newTransactions);
        let newMonthData = {...monthData} as GetMonthResponse_t;
        newMonthData.transactions = newTransactions;
        let newBudgetAnalysis = {...monthData.budgetAnalysis}
        for(let cat of newBudgetAnalysis.budgetOutcomes){
            if(cat.category === category){
                cat.outcome += newTransaction.cost;
            }
        }
        newBudgetAnalysis.totalExpense += newTransaction.cost;
        newMonthData.budgetAnalysis = newBudgetAnalysis;
        setMonthData(newMonthData);
        reset();
    };

    if(!addNew){
        return(
            <Button label="Add New Transaction" onClick={() => setAddNew(true)}/>
        );
    }
    return(
        <Box>
        <Box direction='row-responsive'>
            <DateInput
                format="mm/dd/yyyy"
                value={date}
                onChange={event => onChange(event)}
            />
            <TextInput
                placeholder="Transaction Amount"
                value={amount}
                onChange={event => tryToParseFloat(event.target.value)}
            />
            <Select
                placeholder="Category"
                options={categories}
                value={category}
                onChange={({option}) => {setNewCategory(option)}}
            />
        </Box>
            <Box direction="row-responsive" alignSelf="center">
               <Button label="Accept" disabled={!valid} onClick={() => addNewTransaction()}/>
               <Button label="Cancel" onClick={() => reset()}/>
            </Box>
        </Box>
    );
};
    
export default TransactionTable;