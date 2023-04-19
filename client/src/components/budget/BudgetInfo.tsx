// import {Budget_t} from "./Budget";
// import {Page, PageContent, Paragraph, Card, CardHeader, Heading} from "grommet";




// export default function BudgetInfo(props: {budget: Budget_t}){

//     return(
//         <>
//             <Card justify="center" align="center" width="60%" background="light-2" margin={{left: "auto", right: "auto", top: "2%", bottom: "2%"}}>
//                 <CardHeader align="center" justify="center">
//                     <Heading level={2}>Budget Information</Heading>
//                 </CardHeader>
//                 <Heading margin="small" level={3}>Budget Name</Heading>
//                 <Heading level={4}>Budget Desciption</Heading>
//                 <Paragraph>
//                     Budget Desciption: {props.budget.budgetName}
//                 </Paragraph>
//             </Card>
//         </>
//     )
// }

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Heading,
  TextInput,
} from "grommet";
import { Budget_t } from "./Budget";

type BudgetInfoProps = {
  budget: Budget_t;
};

export default function BudgetInfo(props: {budget: Budget_t}) {
  const [budgetName, setBudgetName] = useState(props.budget.budgetName);
  const [budgetDescription, setBudgetDescription] = useState("example description");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudgetName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBudgetDescription(event.target.value);
  };

  return (
    <Box pad="medium">
      <Card width="large" background="light-2" margin="auto">
        <CardHeader justify="center" align="center">
          <Heading level={2}>Budget Information</Heading>
        </CardHeader>
        <Box justify="center" align="center" pad={{bottom: "medium"}}>
          <Heading level={3}>Budget Name</Heading>
          <div style={{
                display: "flex",
                alignItems: "center",
                width: "40%",
                justifyContent: "center",
            }}>
                <TextInput
                    value={budgetName}
                    onChange={handleNameChange}
                    style={{ borderColor: "black"}}
                    textAlign="center"
                />
            </div>
          <Heading level={4}>Budget Description</Heading>
          <div style={{
                // display: "flex",
                alignItems: "center",

                width: "80%",
                justifyContent: "center",
            }}>
                <TextInput
                    textAlign="center"
                    value={budgetDescription}
                    onChange={handleDescriptionChange}
                    style={{ borderColor: "black" }}
                />
            </div>
        </Box>
      </Card>
    </Box>
  );
}
