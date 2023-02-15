import BudgetView from "./BudgetView";
export default function Card(props){
    return (
        <div
            className='card'
            data-testid={'card' +  "-" + props.key}>

            <BudgetView/>
        </div>
    )
}