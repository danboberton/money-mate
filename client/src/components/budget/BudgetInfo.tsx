import {Budget_t} from "./Budget";
import {Page, PageContent, Paragraph} from "grommet";

export default function BudgetInfo(props: {budget: Budget_t}){

    return(
        <div>
            <Page kind="full">
                <PageContent background="light-3">
                    <h2>Budget Info</h2>
                    <Paragraph>
                        Budget Name: {props.budget.budgetName}
                    </Paragraph>
                </PageContent>
            </Page>
        </div>
    )
}