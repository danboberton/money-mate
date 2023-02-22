import {Budget_t} from "./Budget";

export default function UserBudget(props: {budget: Budget_t | undefined}){

    const localBudget = props.budget ? JSON.stringify(props.budget) : "waiting for API";

    return(
        <div>
            <p>Current Budget:</p><br/>
            <p>Name: {localBudget}</p><br/>
        </div>
    )
}