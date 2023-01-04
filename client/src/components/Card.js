import React from "react";
import BudgetCategory from "./BudgetCategory";
export default function Card(props){
    return (
        <div
            className='card'
            data-testid={'card' +  "-" + props.key}>

            <BudgetCategory/>
        </div>
    )
}